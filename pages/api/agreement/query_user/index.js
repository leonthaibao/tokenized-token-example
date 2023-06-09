import axios from "axios";
import CryptoJS from "crypto-js";
import qs from "qs";
import {configZLP, ZLP_API_PATH} from "../../config";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      let postData = {
        app_id: configZLP.app_id,
        access_token: req.body.payToken,
        req_date: Date.now(), // milliseconds
      }

      let data = postData.app_id + "|" + postData.access_token + "|" + postData.req_date; // app_id|access_token|req_date
      postData.mac = CryptoJS.HmacSHA256(data, configZLP.key1).toString();


      let postConfig = {
        method: 'post',
        url: configZLP.zlp_endpoint + ZLP_API_PATH.AGREEMENT_QUERY_USER,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: qs.stringify(postData)
      };

      axios(postConfig)
      .then(function (response) {
        res.status(200).json(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    } catch (err) {
      res.status(500).json({statusCode: 500, message: err.message});
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}