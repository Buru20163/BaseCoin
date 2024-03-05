$(document).ready(function() {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd",
        "method": "GET",
        "headers": {}
    };

    $.ajax(settings).done(function (response) {
        // Update Bitcoin price
        $(".coin-list .coin:nth-child(1) h3").text("$" + response.bitcoin.usd);

        // Update Ethereum price
        $(".coin-list .coin:nth-child(2) h3").text("$" + response.ethereum.usd);

        // Update Dogecoin price
        $(".coin-list .coin:nth-child(3) h3").text("$" + response.dogecoin.usd);
    });
});

$(document).ready(function() {
    function updateCryptoData() {
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin,tether,solana,usd-coin,shiba-inu,tron&vs_currencies=usd&include_24hr_change=true&include_market_cap=true",
            "method": "GET",
            "headers": {}
        };

        $.ajax(settings).done(function (response) {
            function setColor(element, value) {
                // Set color based on positive or negative value
                if (value > 0) {
                    element.css('color', 'green');
                } else if (value < 0) {
                    element.css('color', 'red');
                }
            }

            // Update Bitcoin data
            $("#bitcoin-price").text("$" + response.bitcoin.usd);
            setColor($("#bitcoin-change"), response.bitcoin.usd_24h_change);
            $("#bitcoin-change").text(response.bitcoin.usd_24h_change.toFixed(2) + "%");
            $("#bitcoin-market-cap").text("$" + response.bitcoin.usd_market_cap);

            // Update Ethereum data
            $("#ethereum-price").text("$" + response.ethereum.usd);
            setColor($("#ethereum-change"), response.ethereum.usd_24h_change);
            $("#ethereum-change").text(response.ethereum.usd_24h_change.toFixed(2) + "%");
            $("#ethereum-market-cap").text("$" + response.ethereum.usd_market_cap);

            // Update Dogecoin data
            $("#dogecoin-price").text("$" + response.dogecoin.usd);
            setColor($("#dogecoin-change"), response.dogecoin.usd_24h_change);
            $("#dogecoin-change").text(response.dogecoin.usd_24h_change.toFixed(2) + "%");
            $("#dogecoin-market-cap").text("$" + response.dogecoin.usd_market_cap);

            // Update Tether data
            $("#tether-price").text("$" + response.tether.usd);
            setColor($("#tether-change"), response.tether.usd_24h_change);
            $("#tether-change").text(response.tether.usd_24h_change.toFixed(2) + "%");
            $("#tether-market-cap").text("$" + response.tether.usd_market_cap);


            // Update Solana data
            $("#solana-price").text("$" + response.solana.usd);
            setColor($("#solana-change"), response.solana.usd_24h_change);
            $("#solana-change").text(response.solana.usd_24h_change.toFixed(2) + "%");
            $("#solana-market-cap").text("$" + response.solana.usd_market_cap);


            // Update USD Coin data
            $("#usd-coin-price").text("$" + response["usd-coin"].usd);
            setColor($("#usd-coin-change"), response["usd-coin"].usd_24h_change);
            $("#usd-coin-change").text(response["usd-coin"].usd_24h_change.toFixed(2) + "%");
            $("#usd-coin-market-cap").text("$" + response["usd-coin"].usd_market_cap);

            // Update Shiba Inu data
            $("#shiba-inu-price").text("$" + response["shiba-inu"].usd);
            setColor($("#shiba-inu-change"), response["shiba-inu"].usd_24h_change);
            $("#shiba-inu-change").text(response["shiba-inu"].usd_24h_change.toFixed(2) + "%");
            $("#shiba-inu-market-cap").text("$" + response["shiba-inu"].usd_market_cap);

            // Update TRON data
            $("#tron-price").text("$" + response.tron.usd);
            setColor($("#tron-change"), response.tron.usd_24h_change);
            $("#tron-change").text(response.tron.usd_24h_change.toFixed(2) + "%");
            $("#tron-market-cap").text("$" + response.tron.usd_market_cap);
        });
    }

    // Call the function initially to update data when the page loads
    updateCryptoData();

    // Schedule periodic updates (every 5 minutes for example)
    setInterval(updateCryptoData, 5 * 60 * 1000); // 5 minutes in milliseconds
});



