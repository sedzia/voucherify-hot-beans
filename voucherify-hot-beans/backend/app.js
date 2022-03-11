if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const port = 3000;
const voucherifyServerSide = require("@voucherify/sdk");

app.get("/", (req, res) => {
  const client = voucherifyServerSide.VoucherifyServerSide({
    applicationId: process.env.APP_ID,
    secretKey: process.env.APP_SECRET_KEY,
  });

  client.redemptions
    .redeem("BLCKFRDY", { order: { amount: 20000 } })
    .then(console.log);

  res.send({
    message: "Hello World xdddd!",
    test: process.env.APP_ID,
    test2: process.env.APP_SECRET_KEY,
  });
});

app.post("/checkVoucher", (req, res) => {
  // const checkVoucher = async (e) => {
  //   e.preventDefault();
  //   const voucherCode = document.getElementById("voucherCode").value;
  //   const response = await fetch(
  //     `https://api.voucherify.io/v1/campaigns/voucherify-test-campaign/vouchers/${voucherCode}`,
  //     {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "X-Client-Application-Id": "011240bf-d5fc-4ef1-9e82-11eb68c43bf5",
  //         "X-Client-Token": "9e2230c5-71fb-460a-91c6-fbee64707a20",
  //       },
  //     }
  //   );
  //   const data = await response.json();
  //   console.log(data);
  //   if (data.data.status === "redeemed") {
  //     alert("Voucher code is redeemed");
  //   } else {
  //     alert("Voucher code is not valid");
  //   }
  // };
  res.send({
    message: "Hello World xdddd!",
    test: process.env.APP_ID,
    test2: process.env.APP_SECRET_KEY,
  });
});

app.listen(port, () => {
  console.log(`Hot beans app listening on port ${port}`);
});
