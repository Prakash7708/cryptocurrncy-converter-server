// 'use strict';
// const multer = require('multer');

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads');
//     },
//     filename: (req, file, cb) => {
//        // console.log(file)
//        cb(null, new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname);
//        //cb(null,file.originalname);
//     }
// });
// const filefilter = (req, file, cb) => {
//     if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype==="model/glb"
//     || file.mimetype === 'image/jpeg'||file.mimetype === 'model/gltf-binary'||file.mimetype === 'model/gltf+json'){
//             cb(null, true);
//         }else {
//             cb(null, false);
//         }
// //     const allowedMimes = ['model/gltf-binary', 'model/gltf+json'];
// //   const fileMagicBytes = file.buffer.toString('hex', 0, 4).toUpperCase();
// //   if (allowedMimes.includes(file.mimetype) || fileMagicBytes === '676C5446') {
// //     cb(null, true);
// //   } else {
// //     cb(null, false);
// //   }
// }

// const upload = multer({storage: storage, fileFilter: filefilter});

// module.exports = {upload}




 // const { sourceCrypto, amount, targetCurrency } = req.body;


        // const response = await axios.get(
        //     'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
        //     {
        //       headers: {
        //         'X-CMC_PRO_API_KEY':  `${APIKEY}`,
        //       },
        //     }
        //   );

        //  // console.log(response.data.data[0])
      
        //   const exchangeRate = response.data.data.find(
        //     (crypto) => crypto.symbol === sourceCrypto
        //   )?.quote[targetCurrency]?.price;

        // // console.log(exchangeRate)
        //   if (!exchangeRate) {
        //     res.status(404).json({ error: 'Exchange rate not found' });
        //     return;
        //   }
      
        //   const convertedAmount = amount * exchangeRate;
        //   //console.log(convertedAmount)
        //    res.status(200).json({convertedAmount})