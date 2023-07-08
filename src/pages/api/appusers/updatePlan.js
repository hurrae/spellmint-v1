import connectMongo from "../../../../connect/DBconnect";
import AppUsers from "../../../../model/AppUserSchema";

export default async function handler(req, res) {
  connectMongo().catch((error) => res.json({ error: "Connection Failed...!" }));

  if (req.method === "POST") {
    if (!req.body) {
      return res.status(400).json({ error: "Request body not found" });
    }

    const { email, plan } = req.body;

    try {
      const user = await AppUsers.findOne({ email });

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      // Update the user's plan
      user.plan = plan;

      // Update the allotted words based on the plan
      if (plan === "Free") {
        user.allottedWords = 100000;
      } else if (plan === "Starter") {
        user.allottedWords = 500000;
      } else if (plan === "Plus") {
        user.allottedWords = 1000000;
      }
      user.consumedWords = 0;
      user.paymentDate = new Date();

      // Save the updated user
      await user.save();
      console.log(`Plan ${plan} updated successfully`);
      res.status(200).json({ message: "Plan updated successfully" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
