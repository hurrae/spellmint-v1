import Stripe from "stripe";
import { buffer } from "micro";
import axios from "axios";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method == "POST") {
    let event;

    try {
      const rawBody = await buffer(req);
      const signature = req.headers["stripe-signature"];

      event = stripe.webhooks.constructEvent(
        rawBody.toString(),
        signature,
        process.env.STRIPE_WEBHOOK_SECRET
      );
    } catch (err) {
      console.log("Error message: ", err.message);
      res.status(400).send(`webhook error: ${err.message}`);
      return;
    }

    console.log("Success:", event.id);

    if (
      event.type === "checkout.session.completed" &&
      event.data.object.payment_status == "paid"
    ) {
      let planName = "Free";
      if (
        (event.data.object.currency == "usd" &&
          (event.data.object.amount_total == 800 ||
            event.data.object.amount_total == 8000)) ||
        (event.data.object.currency == "inr" &&
          (event.data.object.amount_total == 60000 ||
            event.data.object.amount_total == 600000)) ||
        (event.data.object.currency == "aud" &&
          (event.data.object.amount_total == 1100 ||
            event.data.object.amount_total == 11000)) ||
        (event.data.object.currency == "gbp" &&
          (event.data.object.amount_total == 600 ||
            event.data.object.amount_total == 6000)) ||
        (event.data.object.currency == "eur" &&
          (event.data.object.amount_total == 700 ||
            event.data.object.amount_total == 7000))
      ) {
        planName = "Starter";
      } else if (
        (event.data.object.currency == "usd" &&
          (event.data.object.amount_total == 1600 ||
            event.data.object.amount_total == 16000)) ||
        (event.data.object.currency == "inr" &&
          (event.data.object.amount_total == 140000 ||
            event.data.object.amount_total == 1300000)) ||
        (event.data.object.currency == "aud" &&
          (event.data.object.amount_total == 2400 ||
            event.data.object.amount_total == 24000)) ||
        (event.data.object.currency == "gbp" &&
          (event.data.object.amount_total == 1200 ||
            event.data.object.amount_total == 12000)) ||
        (event.data.object.currency == "eur" &&
          (event.data.object.amount_total == 1400 ||
            event.data.object.amount_total == 14000))
      ) {
        planName = "Plus";
      }
      console.log(`Payment received!`);
      axios({
        method: "post",
        url: `${process.env.NEXT_PUBLIC_HOST}/api/appusers/updatePlan`,
        data: {
          //   email: event.data.object.customer_details.email,
          email: event.data.object.custom_fields[0].text.value,
          plan: planName,
        },
      })
        .then((res) => {
          console.log("Updated plan details");
        })
        .catch((err) => console.log("error occured in updating plan: ", err));
    } else {
      console.warn(`Unhandled event type: ${event.type}`);
    }

    // 3. Return a response to acknowledge receipt of the event.
    res.json({ received: true });
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
