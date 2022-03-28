if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const axios = require("axios");
const bp = require("body-parser");
const express = require("express");
const app = express();
const port = 3000;
const voucherifyServerSide = require("@voucherify/sdk");

app.use((req, res, next) => {
  res.append("Access-Control-Allow-Origin", ["*"]);
  res.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.append("Access-Control-Allow-Headers", "Content-Type");
  next();
});
app.use(bp.json());

app.get("/", (req, res) => {
  res.send({
    message: "Hello World!",
  });
});

app.use(bp.json());
app.post("/check-voucher", (req, res) => {
  let voucherCode = req.body.voucherCode;
  if (!req.body.voucherCode) {
    res.status(400).send({
      message: "Voucher code is required",
    });
  } else {
    const options = {
      method: "POST",
      url:
        voucherCode === "BLCKFRDY"
          ? "https://api.voucherify.io/v1/vouchers/v_t1DmA0HCtuMvjiLVH6AZFxJDoKK0iqOj/validate"
          : voucherCode === "50%UPTO100"
          ? "https://api.voucherify.io/v1/vouchers/v_Fyl83QB45569nPWIILY7cLYOSkqnITOE/validate"
          : "https://api.voucherify.io/v1/vouchers/v_SPpXJHj4qwR6TeT75IFfMEKXVsLCUpvU/validate",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-App-Id": process.env.APP_ID,
        "X-App-Token": process.env.APP_SECRET_KEY,
      },
      data: {
        customer: {
          id: "cust_qyL9HNyytRSbexIdPluHT8S0",
          source_id: "track_+EUcXP8WDKXGf3mYmWxbJvEosmKXi3Aw",
        },
        order: { amount: 1000 },
        reward: { id: "rew_eSi4eYJk7o3tOycvweicR2z7" },
      },
    };

    axios
      .request(options)
      .then(function (response) {
        if (response.data.valid) {
          res.send({
            status: "success",
            message: "Voucher granted",
            amount: response.data.discount.amount_off,
            campaign: response.data.campaign,
          });
        }
      })
      .catch(function (error) {
        console.error(error);
        res.send({
          status: "error",
          message: "Voucher incorrect",
        });
      });
  }

  console.log("trigger");
  console.log(req.body.voucherCode);
  // res.send({
  //   message: "Hello World xdddd!",
  // });
});

app.post("/redeem-voucher", (req, res) => {
  let voucherCode = req.body.voucherCode;
  if (!req.body.voucherCode) {
    res.status(400).send({
      message: "Voucher code is required",
    });
  } else {
    const options = {
      method: "POST",
      url:
        voucherCode === "BLCKFRDY"
          ? "https://api.voucherify.io/v1/vouchers/v_t1DmA0HCtuMvjiLVH6AZFxJDoKK0iqOj/redemption"
          : voucherCode === "50%UPTO100"
          ? "https://api.voucherify.io/v1/vouchers/v_Fyl83QB45569nPWIILY7cLYOSkqnITOE/redemption"
          : "https://api.voucherify.io/v1/vouchers/v_SPpXJHj4qwR6TeT75IFfMEKXVsLCUpvU/redemption",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-App-Id": process.env.APP_ID,
        "X-App-Token": process.env.APP_SECRET_KEY,
      },
      data: {
        customer: {
          id: "cust_qyL9HNyytRSbexIdPluHT8S0",
          source_id: "track_+EUcXP8WDKXGf3mYmWxbJvEosmKXi3Aw",
        },
        order: { amount: 1000 },
        reward: { id: "rew_eSi4eYJk7o3tOycvweicR2z7" },
      },
    };

    axios
      .request(options)
      .then(function (response) {
        if (response.data.valid) {
          res.send({
            status: "success",
            message: "Voucher granted",
            amount: response.data.discount.amount_off,
            campaign: response.data.campaign,
          });
        }
      })
      .catch(function (error) {
        console.error(error);
        res.send({
          status: "error",
          message: "Voucher incorrect",
        });
      });
  }

  console.log("trigger");
  console.log(req.body.voucherCode);
  // res.send({
  //   message: "Hello World xdddd!",
  // });
});

app.listen(port, () => {
  console.log(`Hot beans app listening on port ${port}`);
});
