<script>
    import { executeClient } from 'api/rage'
    import axios from 'axios';
    import qs from 'querystring';
    import { accountLogin } from 'store/account'
    import { serverDonatMultiplier, serverId } from 'store/server'

  import './pay.css';
    import './pay2.css';
    let
        donateUrl = false,
        donateToggled = true,
        donateText = "1",
        donateSelect = "unitpay";
    export let popupData;

	const onHandleInput = (value) => {
        value = Math.round(value.replace(/\D+/g, ""));
        if (value < 0) value = 0;
        else if (value > 999999) value = 999999;

        donateText = value;
    }

    const onDonate = () => {
        //if (!isLogin(player.login))
        //    return window.showTooltip("#donateInput", 2, "Что пошло не так...");
        if (donateText < 0 || donateText > 999999)
            return window.showTooltip("#donateInput", 2, "Неверный формат");
        donateToggled = false;
        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }

        axios.post('https://acirp.myarena.site/', qs.stringify({
            name: $accountLogin,
            sum: Math.round(donateText),
            srv: Math.round($serverId),
            type: donateSelect
        }), config)
        .then(function (response) {
            response = response.data;
            if(response.status === 'success') {
                executeClient ("client.opendonatesite", response.url);
            } else if(response.status == 'error') {
                window.notificationAdd(4, 9, response.msg, 3000);
                donateUrl = false;
                donateToggled = true;
            }
        });
    }

    if (popupData && popupData > 0) {
        donateText = String (popupData);
        donateToggled = false;
        onDonate ();
    }

    const getDonate = (text) => {
        if (text < 0) text = 0;
        else if (text > 999999) text = 999999;
        let tallage = 0;
        if ($serverDonatMultiplier > 1) {
            text = text * $serverDonatMultiplier;
        } else {
            if (text >= 20000) {
                tallage = 50;
            } else if (text >= 10000) {
                tallage = 30;
            } else if (text >= 3000) {
                tallage = 20;
            } else if (text >= 1000) {
                tallage = 10;
            }
        }

        return `${Math.round(text) + Math.round(text / 100 * tallage)}`;
    }
</script>
<style>
    
</style>
<div class="wrapper">
  <div
    
    
    
    class="background-wrapper"
    style="perspective: 1000px;"
  >
    <img
      
      class="background"
      src="https://cdn.majestic-files.com/public/master/static/img/F4/Donate/Replenish/background.webp"
      alt=""
    />
    <div  class="gradient"></div>
    <div
      
      class="character"
      style="transition-property: transform; transition-duration: 1000ms; transform-origin: center center; transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);"
    >
      <img
        
        src="https://cdn.majestic-files.com/public/master/static/img/F4/Donate/Replenish/character.webp"
        alt=""
      />
    </div>
    <div
      
      class="blur"
      style="transition-property: transform; transition-duration: 1000ms; transform-origin: center center; transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);"
    ></div>
    <div
      
      class="coin-1"
      style="transition-property: transform; transition-duration: 1000ms; transform-origin: center center; transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);"
    >
      <img
        
        src="https://cdn.majestic-files.com/public/master/static/img/F4/Donate/Replenish/coin1.webp"
        alt=""
      />
    </div>
    <div
      
      class="coin-2"
      style="transition-property: transform; transition-duration: 1000ms; transform-origin: center center; transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);"
    >
      <img
        
        src="https://cdn.majestic-files.com/public/master/static/img/F4/Donate/Replenish/coin2.webp"
        alt=""
      />
    </div>
    <div
      
      class="coin-3"
      style="transition-property: transform; transition-duration: 1000ms; transform-origin: center center; transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);"
    >
      <img
        
        src="https://cdn.majestic-files.com/public/master/static/img/F4/Donate/Replenish/coin3.webp"
        alt=""
      />
    </div>
    <!---->
  </div>
  <div class="main">
    <div class="replenish">
      <div class="user-data">
        <div class="input-container">
          <!----><!----><!----><input
            
            
            id="coins"
            type="text"
            class="input-container__input w-100"
            maxlength="6"
            placeholder="cef.donate.replenish.coinsPlaceholder"
          /><!---->
          <div
            
            
            class="error-tooltip"
          ></div>
          <div class="x2-coins">
            <!----><!----><!----><span
              
              
              class="x2-coins__value">0</span
            ><!----><!---->
          </div>
        </div>
        <div
          
          
          class="input-container flex flex-row items-center"
        >
          <!----><input
            
            
            type="password"
            class="input-container__input w-100"
            placeholder="cef.donate.replenish.emailPlaceholder"
          /><!---->
          <div
            
            
            class="error-tooltip"
          ></div>
          <!---->
        </div>
        <!---->
      </div>
      <div
        
        
        class="payment-methods-wrapper"
      >
        <div class="title">
          cef.donate.replenish.payment-system
        </div>
        <div
          
          
          
          class="payment-methods"
        >
          <div
            
            
            class="selecting-item direct_banking isSelected"
          >
            <!---->
            <div  class="icon-container">
              <img
                
                class="icon-container__image-default"
                src="https://cdn.majestic-files.com/public/master/static/img/global/donate/new-pay-methods/default/direct_banking.svg"
                alt=""
              /><img
                
                class="icon-container__image-hovered"
                src="https://cdn.majestic-files.com/public/master/static/img/global/donate/new-pay-methods/hovered/direct_banking.svg"
                alt=""
              /><img
                
                class="icon-container__image-selected"
                src="https://cdn.majestic-files.com/public/master/static/img/global/donate/new-pay-methods/selected/direct_banking.svg"
                alt=""
              />
            </div>
            <span  class="payment-method__title"
              >cef.donate.replenish.paymentMethods.direct_banking</span
            >
          </div>
          <div
            
            
            class="selecting-item cards_eu"
          >
            <!---->
            <div  class="icon-container">
              <img
                
                class="icon-container__image-default"
                src="https://cdn.majestic-files.com/public/master/static/img/global/donate/new-pay-methods/default/cards_eu.svg"
                alt=""
              /><img
                
                class="icon-container__image-hovered"
                src="https://cdn.majestic-files.com/public/master/static/img/global/donate/new-pay-methods/hovered/cards_eu.svg"
                alt=""
              /><img
                
                class="icon-container__image-selected"
                src="https://cdn.majestic-files.com/public/master/static/img/global/donate/new-pay-methods/selected/cards_eu.svg"
                alt=""
              />
            </div>
            <span  class="payment-method__title"
              >cef.donate.replenish.paymentMethods.cards_eu</span
            >
          </div>
          <div
            
            
            class="selecting-item paypal"
          >
            <!---->
            <div  class="icon-container">
              <img
                
                class="icon-container__image-default"
                src="https://cdn.majestic-files.com/public/master/static/img/global/donate/new-pay-methods/default/paypal.svg"
                alt=""
              /><img
                
                class="icon-container__image-hovered"
                src="https://cdn.majestic-files.com/public/master/static/img/global/donate/new-pay-methods/hovered/paypal.svg"
                alt=""
              /><img
                
                class="icon-container__image-selected"
                src="https://cdn.majestic-files.com/public/master/static/img/global/donate/new-pay-methods/selected/paypal.svg"
                alt=""
              />
            </div>
            <!---->
          </div>
          <div
            
            
            class="selecting-item kinguin"
          >
            <!---->
            <div  class="icon-container">
              <img
                
                class="icon-container__image-default"
                src="https://cdn.majestic-files.com/public/master/static/img/global/donate/new-pay-methods/default/kinguin.svg"
                alt=""
              /><img
                
                class="icon-container__image-hovered"
                src="https://cdn.majestic-files.com/public/master/static/img/global/donate/new-pay-methods/hovered/kinguin.svg"
                alt=""
              /><img
                
                class="icon-container__image-selected"
                src="https://cdn.majestic-files.com/public/master/static/img/global/donate/new-pay-methods/selected/kinguin.svg"
                alt=""
              />
            </div>
            <span  class="payment-method__title"
              >cef.donate.replenish.paymentMethods.kinguin</span
            >
          </div>
          <div
            
            
            class="selecting-item paysafecard"
          >
            <!---->
            <div  class="icon-container">
              <img
                
                class="icon-container__image-default"
                src="https://cdn.majestic-files.com/public/master/static/img/global/donate/new-pay-methods/default/paysafecard.svg"
                alt=""
              /><img
                
                class="icon-container__image-hovered"
                src="https://cdn.majestic-files.com/public/master/static/img/global/donate/new-pay-methods/hovered/paysafecard.svg"
                alt=""
              /><img
                
                class="icon-container__image-selected"
                src="https://cdn.majestic-files.com/public/master/static/img/global/donate/new-pay-methods/selected/paysafecard.svg"
                alt=""
              />
            </div>
            <!---->
          </div>
          <div
            
            
            class="selecting-item blik"
          >
            <!---->
            <div  class="icon-container">
              <img
                
                class="icon-container__image-default"
                src="https://cdn.majestic-files.com/public/master/static/img/global/donate/new-pay-methods/default/blik.svg"
                alt=""
              /><img
                
                class="icon-container__image-hovered"
                src="https://cdn.majestic-files.com/public/master/static/img/global/donate/new-pay-methods/hovered/blik.svg"
                alt=""
              /><img
                
                class="icon-container__image-selected"
                src="https://cdn.majestic-files.com/public/master/static/img/global/donate/new-pay-methods/selected/blik.svg"
                alt=""
              />
            </div>
            <!---->
          </div>
          <div
            
            
            class="selecting-item giropay"
          >
            <!---->
            <div  class="icon-container">
              <img
                
                class="icon-container__image-default"
                src="https://cdn.majestic-files.com/public/master/static/img/global/donate/new-pay-methods/default/giropay.svg"
                alt=""
              /><img
                
                class="icon-container__image-hovered"
                src="https://cdn.majestic-files.com/public/master/static/img/global/donate/new-pay-methods/hovered/giropay.svg"
                alt=""
              /><img
                
                class="icon-container__image-selected"
                src="https://cdn.majestic-files.com/public/master/static/img/global/donate/new-pay-methods/selected/giropay.svg"
                alt=""
              />
            </div>
            <!---->
          </div>
          <div
            
            
            class="selecting-item steam"
          >
            <!---->
            <div  class="icon-container">
              <img
                
                class="icon-container__image-default"
                src="https://cdn.majestic-files.com/public/master/static/img/global/donate/new-pay-methods/default/steam.svg"
                alt=""
              /><img
                
                class="icon-container__image-hovered"
                src="https://cdn.majestic-files.com/public/master/static/img/global/donate/new-pay-methods/hovered/steam.svg"
                alt=""
              /><img
                
                class="icon-container__image-selected"
                src="https://cdn.majestic-files.com/public/master/static/img/global/donate/new-pay-methods/selected/steam.svg"
                alt=""
              />
            </div>
            <span  class="payment-method__title"
              >cef.donate.replenish.paymentMethods.steam</span
            >
          </div>
          <div
            
            
            class="selecting-item trc20"
          >
            <!---->
            <div  class="icon-container">
              <img
                
                class="icon-container__image-default"
                src="https://cdn.majestic-files.com/public/master/static/img/global/donate/new-pay-methods/default/trc20.svg"
                alt=""
              /><img
                
                class="icon-container__image-hovered"
                src="https://cdn.majestic-files.com/public/master/static/img/global/donate/new-pay-methods/hovered/trc20.svg"
                alt=""
              /><img
                
                class="icon-container__image-selected"
                src="https://cdn.majestic-files.com/public/master/static/img/global/donate/new-pay-methods/selected/trc20.svg"
                alt=""
              />
            </div>
            <span  class="payment-method__title"
              >USDT TETHER TRC-20</span
            >
          </div>
          <div
            
            
            class="selecting-item erc20"
          >
            <!---->
            <div  class="icon-container">
              <img
                
                class="icon-container__image-default"
                src="https://cdn.majestic-files.com/public/master/static/img/global/donate/new-pay-methods/default/erc20.svg"
                alt=""
              /><img
                
                class="icon-container__image-hovered"
                src="https://cdn.majestic-files.com/public/master/static/img/global/donate/new-pay-methods/hovered/erc20.svg"
                alt=""
              /><img
                
                class="icon-container__image-selected"
                src="https://cdn.majestic-files.com/public/master/static/img/global/donate/new-pay-methods/selected/erc20.svg"
                alt=""
              />
            </div>
            <span  class="payment-method__title"
              >USDT TETHER ERC-20</span
            >
          </div>
          <div
            
            
            class="selecting-item bitcoin"
          >
            <!---->
            <div  class="icon-container">
              <img
                
                class="icon-container__image-default"
                src="https://cdn.majestic-files.com/public/master/static/img/global/donate/new-pay-methods/default/bitcoin.svg"
                alt=""
              /><img
                
                class="icon-container__image-hovered"
                src="https://cdn.majestic-files.com/public/master/static/img/global/donate/new-pay-methods/hovered/bitcoin.svg"
                alt=""
              /><img
                
                class="icon-container__image-selected"
                src="https://cdn.majestic-files.com/public/master/static/img/global/donate/new-pay-methods/selected/bitcoin.svg"
                alt=""
              />
            </div>
            <span  class="payment-method__title"
              >cef.donate.replenish.paymentMethods.bitcoin</span
            >
          </div>
          <div
            
            
            class="selecting-item ethereum"
          >
            <!---->
            <div  class="icon-container">
              <img
                
                class="icon-container__image-default"
                src="https://cdn.majestic-files.com/public/master/static/img/global/donate/new-pay-methods/default/ethereum.svg"
                alt=""
              /><img
                
                class="icon-container__image-hovered"
                src="https://cdn.majestic-files.com/public/master/static/img/global/donate/new-pay-methods/hovered/ethereum.svg"
                alt=""
              /><img
                
                class="icon-container__image-selected"
                src="https://cdn.majestic-files.com/public/master/static/img/global/donate/new-pay-methods/selected/ethereum.svg"
                alt=""
              />
            </div>
            <span  class="payment-method__title"
              >cef.donate.replenish.paymentMethods.ethereum</span
            >
          </div>
          <div
            
            
            class="selecting-item crypto"
          >
            <!---->
            <div  class="icon-container">
              <img
                
                class="icon-container__image-default"
                src="https://cdn.majestic-files.com/public/master/static/img/global/donate/new-pay-methods/default/crypto.svg"
                alt=""
              /><img
                
                class="icon-container__image-hovered"
                src="https://cdn.majestic-files.com/public/master/static/img/global/donate/new-pay-methods/hovered/crypto.svg"
                alt=""
              /><img
                
                class="icon-container__image-selected"
                src="https://cdn.majestic-files.com/public/master/static/img/global/donate/new-pay-methods/selected/crypto.svg"
                alt=""
              />
            </div>
            <span  class="payment-method__title"
              >cef.donate.replenish.paymentMethods.crypto</span
            >
          </div>
          <div
            
            
            class="selecting-item trustly"
          >
            <!---->
            <div  class="icon-container">
              <img
                
                class="icon-container__image-default"
                src="https://cdn.majestic-files.com/public/master/static/img/global/donate/new-pay-methods/default/trustly.svg"
                alt=""
              /><img
                
                class="icon-container__image-hovered"
                src="https://cdn.majestic-files.com/public/master/static/img/global/donate/new-pay-methods/hovered/trustly.svg"
                alt=""
              /><img
                
                class="icon-container__image-selected"
                src="https://cdn.majestic-files.com/public/master/static/img/global/donate/new-pay-methods/selected/trustly.svg"
                alt=""
              />
            </div>
            <!---->
          </div>
          <div
            
            
            class="selecting-item sofort"
          >
            <!---->
            <div  class="icon-container">
              <img
                
                class="icon-container__image-default"
                src="https://cdn.majestic-files.com/public/master/static/img/global/donate/new-pay-methods/default/sofort.svg"
                alt=""
              /><img
                
                class="icon-container__image-hovered"
                src="https://cdn.majestic-files.com/public/master/static/img/global/donate/new-pay-methods/hovered/sofort.svg"
                alt=""
              /><img
                
                class="icon-container__image-selected"
                src="https://cdn.majestic-files.com/public/master/static/img/global/donate/new-pay-methods/selected/sofort.svg"
                alt=""
              />
            </div>
            <!---->
          </div>
          <div
            
            
            class="selecting-item ideal"
          >
            <!---->
            <div  class="icon-container">
              <img
                
                class="icon-container__image-default"
                src="https://cdn.majestic-files.com/public/master/static/img/global/donate/new-pay-methods/default/ideal.svg"
                alt=""
              /><img
                
                class="icon-container__image-hovered"
                src="https://cdn.majestic-files.com/public/master/static/img/global/donate/new-pay-methods/hovered/ideal.svg"
                alt=""
              /><img
                
                class="icon-container__image-selected"
                src="https://cdn.majestic-files.com/public/master/static/img/global/donate/new-pay-methods/selected/ideal.svg"
                alt=""
              />
            </div>
            <!---->
          </div>
        </div>
      </div>
      <div class="checkboxes">
        <div
          
          
          
          class="checkbox-container"
        >
          <div  class="checkbox">
            <input
              
              id="termsOffer"
              type="checkbox"
              class="checkbox__input"
              value="false"
            /><!---->
          </div>
          <label
            
            for="termsOffer"
            class="checkbox-container__title"
            >cef.donate.replenish.termsOffer</label
          >
        </div>
        <div
          
          
          
          class="checkbox-container"
        >
          <div  class="checkbox">
            <input
              
              id="contentActivation"
              type="checkbox"
              class="checkbox__input"
              value="false"
            /><!---->
          </div>
          <label
            
            for="contentActivation"
            class="checkbox-container__title"
            >cef.donate.replenish.contentActivation</label
          >
        </div>
      </div>
      <div class="btns">
        <button class="submit"
          >cef.donate.replenish.disabled-submit</button
        >
      </div>
    </div>
    <div class="description">
      <div class="title">
        cef.donate.replenish.about-donate
      </div>
      <div class="sub-title">
        cef.donate.replenish.description
      </div>
      <div class="sub-title">
        cef.donate.replenish.warning
      </div>
      <div class="course">
        <div class="course-title">
          cef.donate.replenish.course-title
        </div>
        <div class="currency">
          <div
            
            
            class="currency__container"
          >
            <div
              
              
              class="currency__container__icon-wrapper"
            >
              <!----><!----><!---->
            </div>
            <div
              
              
              class="currency__container-value"
            >
              1
            </div>
          </div>
          <!---->
          <div
            
            
            class="currency__container"
          >
            <div
              
              
              class="currency__container__icon-wrapper"
            >
              <!---->
            </div>
            <div
              
              
              class="currency__container-value"
            >
              160
            </div>
          </div>
          <!---->
          <div
            
            
            class="currency__container"
          >
            <div
              
              
              class="currency__container__icon-wrapper dollar"
            >
              <!---->
            </div>
            <div
              
              
              class="currency__container-value"
            >
              16000
            </div>
          </div>
        </div>
      </div>
      <!---->
    </div>
  </div>
  <!---->
</div>

