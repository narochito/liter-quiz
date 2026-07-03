import Script from "next/script";

const YANDEX_METRIKA_ID = 110368041;
const YANDEX_METRIKA_TAG_URL = `https://mc.yandex.ru/metrika/tag.js?id=${YANDEX_METRIKA_ID}`;
const YANDEX_METRIKA_INIT_FLAG = `__ymInited${YANDEX_METRIKA_ID}`;

export function YandexMetrika() {
  return (
    <>
      <Script
        id="yandex-metrika"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
(function(m,e,t,r,i,k,a){
    m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    m[i].l=1*new Date();
    for (var j = 0; j < document.scripts.length; j++) {
        if (document.scripts[j].src === r) {
            return;
        }
    }
    k=e.createElement(t),
    a=e.getElementsByTagName(t)[0],
    k.async=1,
    k.src=r,
    a.parentNode.insertBefore(k,a)
})(window, document, 'script', '${YANDEX_METRIKA_TAG_URL}', 'ym');

if (!window.${YANDEX_METRIKA_INIT_FLAG}) {
    window.${YANDEX_METRIKA_INIT_FLAG} = true;
    ym(${YANDEX_METRIKA_ID}, 'init', {
        ssr: true,
        webvisor: true,
        clickmap: true,
        ecommerce: "dataLayer",
        referrer: document.referrer,
        url: location.href,
        accurateTrackBounce: true,
        trackLinks: true
    });
}
          `.trim(),
        }}
      />
      <noscript>
        <div>
          <img
            src={`https://mc.yandex.ru/watch/${YANDEX_METRIKA_ID}`}
            style={{ position: "absolute", left: "-9999px" }}
            alt=""
          />
        </div>
      </noscript>
    </>
  );
}
