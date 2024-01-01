
const axios = require('axios');

// API key for the CoinMarketCap 
const APIKEY = process.env.APIKEY;

exports.Cryptocurrencies = async function (req, res) {
    //console.log(req.files)
   // console.log(req.body)
    try {
        const response = await axios.get(
            'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
            {
              headers: {
                'X-CMC_PRO_API_KEY':`${APIKEY}`,
              },
            }
          );
          //console.log(response.data.data.length);
          const topCryptos = response.data.data.slice(0, 100);
          res.status(200).json(topCryptos);

    } catch (error) {
        console.log(error)
        //next(error)
      res.status(500).json({
        status: "failure",
        
      });
    }
};


exports.Convert_currencies = async function (req, res) {
   //console.log(req.body)
  
    try {


        const { sourceCrypto, amount, targetCurrency } = req.body;

        const response = await axios.get(
            'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
            {
                headers: {
                    'X-CMC_PRO_API_KEY': APIKEY,
                },
                params: {
                    convert: targetCurrency, 
                },
            }
        );

        const exchangeRate = response.data.data.find(
            (crypto) => crypto.symbol === sourceCrypto
        )?.quote[targetCurrency]?.price;

        if (!exchangeRate) {
            res.status(404).json({ error: 'Exchange rate not found' });
            return;
        }

        const convertedAmount = amount * exchangeRate;

        res.status(200).json({ convertedAmount });






    } catch (error) {
        console.log(error)
        //next(error)
      res.status(500).json({
        status: "failure",
        
      });
    }
  
    
};

