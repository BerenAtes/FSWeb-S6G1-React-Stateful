/*
INPUT Talimatlar

Şu kısa videoyu izleyin:
https://www.ergineer.com/assets/materials/a664dfe7-input.gif

Bu INPUT'u oluşturmak için kaç adet state dilimine ihtiyacınız var? Başlamadan önce biraz üzerine düşünün!

Evet sadece bir dilim yeterli! İçeride inputun değerini sürekli izleyeceğiz.
Metnin royalblue veya crimson olacağı, input değerinin uzunluğundan elde edilebilir.

ADIM 0:
  Aşağıdaki bileşeni inceleyerek ve state hookunu import ederek başlayın.

ADIM 1:
  'inputDeğeri' ve 'setInputDeğeri' ikili state hookunu oluşturun.
  Bu state boş bir string olarak yüklenecektir(initialize).

ADIM 2:
  'inputDeğeri' uzunluğu 10 karakteri geçerse renk crimson olacaktır.

ADIM 3:
  Bu <div /> içindeki inputa değer girildiğinde hepsini BÜYÜK HARFLERDE göstermesini nasıl sağlayabiliriz?

ADIM 4:
  Event nesnesinin içinde bulunan state'e input'un değerini atayın

ADIM 5:
  Input değerinin state'ını boşaltın. Reset hala çalışmıyor bir sonraki adımı inceleyin.

ADIM 6:
  Inputun başarılı bir şekilde resetlemesi için değerini state'ten almalıdır!
  <input /> öğesine şu şekilde fazladan bir prop eklememiz gerekiyor: value={inputDeğeri}
*/

import React, { useState } from "react"; /* ADIM 0 */

export default function Input() {
  const [input, setInput] = useState("");

  const inputuDeğiştir = (evt) => {
    // When the input changes, its whole value can be found inside the event object.
    // Log out the synthetic event object 'evt' and see for yourself.
    const { value } = evt.target;

    setInput(value);
  };
  const reset = () => {
    /* ADIM 5 */
    setInput = "";
  };

  const stil = {
    fontSize: "1.5em",
    marginBottom: "0.3em",
    color: input.length > 10 ? "crimson" : "royalblue",
  };

  return (
    <div className="widget-input container">
      <h2>Input</h2>
      <div id="output" style={stil}></div> {input.toUpperCase()}
      <div>
        <input id="input" type="text" onChange={inputuDeğiştir} value={input} />

        <button id="resetInput" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}
