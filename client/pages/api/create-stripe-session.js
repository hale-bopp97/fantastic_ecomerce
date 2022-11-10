const stripe = require('stripe')("sk_test_51M2LLEInbrXpQEnYNep9cDqzY82DEj2WTv0FPYxArXYUfNIhGBia8Eheo9vfqsPBIJpBkpOVbaPwDwBxIMMi4XQr001aVQH9vW");

async function CreateStripeSession(req, res) {
  const { item } = req.body;

  const redirectURL = "http://localhost:3000"
    // process.env.NODE_ENV === 'development'
    //   ? 'http://localhost:3000'
    //   : 'http://fantastic-ecomerce.vercel.app';


  const transformedItem = {
    price_data: {
      currency: 'usd',
      product_data: {
        images: [item.image],
        name: item.name,
        description: item.description,
      },
      unit_amount: item.price * 100,
    },
    quantity: item.quantity,
  };

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [transformedItem],
    mode: 'payment',
    success_url: redirectURL + '?status=success',
    cancel_url: redirectURL + '?status=cancel',
    metadata: {
      images: item.image,
    },
  });

  res.json({ id: session.id });
}

export default CreateStripeSession;