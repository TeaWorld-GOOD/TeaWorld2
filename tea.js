let grams1 = 50, grams2 = 50, grams3 = 50, grams4 = 50, grams5 = 50;
        const pricePer100g1 = 12, pricePer100g2 = 13, pricePer100g3 = 32, pricePer100g4 = 15, pricePer100g5 = 6;

        function changeGrams(productId, amount) {
            let grams = 100;
            let pricePer100g = 100;

            if (productId === 1) {
                grams = grams1;
                pricePer100g = pricePer100g1;
            } else if (productId === 2) {
                grams = grams2;
                pricePer100g = pricePer100g2;
            } else if (productId === 3) {
                grams = grams3;
                pricePer100g = pricePer100g3;
            }
          else if (productId === 4) {
                grams = grams4;
                pricePer100g = pricePer100g4;
            }
          else if (productId === 5) {
                grams = grams5;
                pricePer100g = pricePer100g5;
            }

          

            if (grams + amount >= 50) {
                grams += amount;
                if (productId === 1) {
                    grams1 = grams;
                    document.getElementById("grams1").textContent = grams;
                    document.getElementById("price1").textContent = (grams / 100 * pricePer100g).toFixed(0);
                } else if (productId === 2) {
                    grams2 = grams;
                    document.getElementById("grams2").textContent = grams;
                    document.getElementById("price2").textContent = (grams / 100 * pricePer100g).toFixed(0);
                } else if (productId === 3) {
                    grams3 = grams;
                    document.getElementById("grams3").textContent = grams;
                    document.getElementById("price3").textContent = (grams / 100 * pricePer100g).toFixed(0);
                }
              else if (productId === 4) {
                    grams4 = grams;
                    document.getElementById("grams4").textContent = grams;
                    document.getElementById("price4").textContent = (grams / 100 * pricePer100g).toFixed(0);
                }
              else if (productId === 5) {
                    grams5 = grams;
                    document.getElementById("grams5").textContent = grams;
                    document.getElementById("price5").textContent = (grams / 100 * pricePer100g).toFixed(0);
                }

            }
        }

        function buy(productId) {
            let button;
            if (productId === 1) {
                button = document.querySelectorAll(".buy-button")[0];
            } else if (productId === 2) {
                button = document.querySelectorAll(".buy-button")[1];
            } else if (productId === 3) {
                button = document.querySelectorAll(".buy-button")[2];
            }
          else if (productId === 4) {
                button = document.querySelectorAll(".buy-button")[3];
            }
          else if (productId === 5) {
                button = document.querySelectorAll(".buy-button")[4];
            }


            button.classList.add("move-up");

            // Вернуть кнопку через 1 секунду (можно убрать)
            setTimeout(() => button.classList.remove("move-up"), 1000);
        }
        function buy() {
            alert("Вы успешно купили товар!");
        }