import dotenv from "dotenv";

dotenv.config();

export default {
  AWS: {
    region: "us-east-1",
    accessKeyId: process.env.accessKey,
    secretAccessKey: process.env.secretAccessKey,
    AWS_SDK_LOAD_CONFIG: 1,
  },
  Stripe: process.env.stripeSecretKey,
};
