import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function DivElementti() {
  return (
    <div>Tämä on yksinkertainen div-elementti</div>
  )
}

function Otsikot() {
  return (
    <div>
      <h1>Otsikko</h1>
      <h2>Alaotsikko</h2>
    </div>
  )
}

function Kappale() {
  return (
    <div>
      <p>Tämä on kappaleen teksti</p>
    </div>
  )
}

function Lista() {
  return (
    <div>
      <ul>
        <li>Ensimmäinen listaelementti</li>
        <li>Toinen listaelementti</li>
        <li>Kolmas listaelementti</li>
      </ul>
    </div>
  )
}

function Kuva() {
  return (
    <img src="./React_pic.png" alt="Kuva" width={300} height={150} />
  )
}

function Linkki() {
  return(
    <a href="https://www.keuda.fi">Keuda</a>
  )
}

function Taulukko() {
  return(
    <table border={1} color='blue'>
      <tbody>
        <tr>
          <th>Hedelmät</th>
          <th>Vihannekset</th>
        </tr>
        <tr>
          <td>Omena</td>
          <td>Peruna</td>
        </tr>
        <tr>
          <td>Banaani</td>
          <td>Porkkana</td>
        </tr>
      </tbody>
    </table>
  )
}

function Ympyra() {
  return (
    <svg width={100} height={100}>
      <circle cx={50} cy={50} r={50} fill='blue' />
    </svg>
  )
}

function Painikkeet() {
  return (
    <div>
      <button>Painike 1</button>
      <button>Painike 2</button>
      <button>Painike 3</button>
    </div>
  )
}

function Sahkoposti() {
  return (
    <form action="">
      <label htmlFor="email">Sähköposti: <input type='email' /></label>
      <button type='submit'>Lähetä</button>
    </form>
  )
}

function Kartta() {
  return (
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4687170.455081754!2d19.937562117902992!3d65.10554583680602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4681cadf4b32f6dd%3A0x146d63c75a810!2sSuomi!5e0!3m2!1sfi!2suk!4v1697640876428!5m2!1sfi!2suk" title="myFrame" style={{ width: "600", height:"450", frameborder:"0", border: 0, allowfullscreen: "", tabindex: "0" }}>
    </iframe>
  )
}

function Video() {
  return (
    <iframe width="640" height="360" src="https://www.youtube.com/embed/9D1x7-2FmTA?list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d" title="Full React Tutorial #3 - Components &amp; Templates" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
  )
}

function Video_2() {
  return (
    <video width="320" height="240" controls>
      <source src='https://lumoakatemia.eu/Tehtavat/file_example_MP4_480_1_5MG.mp4' type="video/mp4" />
    </video>  )
}


function HaeVuodenAika() {
  const date = new Date();
  const month = date.getMonth();
  if (month >= 2 && month <= 4) {
    return "Kevät";
  } else if (month >= 5 && month <= 7) {
    return "Kesä";
  } else if (month >= 8 && month <= 10) {
    return "Syksy";
  } else {
    return "Talvi";
  }
}

function HaeSatunnaisluku() {
  return Math.floor(Math.random() * 100) + 1;
}

function Home() {
  return (
    <div>Tervetuloa kotisivulleni</div>
  )
}
function About() {
  return (
    <div>Tietoa meistä</div>
  )
}
function Contact() {
  return (
    <div>Ota yhteyttä</div>
  )
}
function Navigointi() {
  return (
    <nav>
      <ul className='navigointi_lista'>
        <li><a href="/"><Home /></a></li>
        <li><a href="/about"><About /></a></li>
        <li><a href="/contact"><Contact /></a></li>
      </ul>
    </nav>
  )
}

function TaulukkoListaksi() {
  const items = ["Yksi", "Kaksi", "Kolme"];
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

function DynaaminenElementti() {
  const dynamicText = "Tämä on dynaaminen teksti";
  return <div>{dynamicText}</div>;
}

function MapNumerot() {
  const numbers = [1, 2, 3, 4, 5];
  const numberItems = numbers.map((number) => {
    return <li key={number}>{number}</li>
  })
  return (
    <ul>
      {numberItems}
    </ul>
  );
}

function MapNimet() {
  const nimet = ["Aada", "Bärtil", "Kalle", "Taavetti", "Eeva"];
  const yksiloNimet = nimet.map((nimi, index) =>
  <p key={index}>{nimi}</p>);

  return (
    <div>
      {yksiloNimet}
    </div>
  );
}

function TuoteLista() {
  const tuotteet = [
    { nimi: "Tuote 1", hinta: 10 },
    { nimi: "Tuote 2", hinta: 20 },
    { nimi: "Tuote 3", hinta: 30 },
    { nimi: "Tuote 4", hinta: 40 },
    { nimi: "Tuote 5", hinta: 50 },
  ];

  const yksiloTuotteet = tuotteet.map((tuote, index) => (
    <div key={index}>
      <p>{tuote.nimi}: {tuote.hinta} €</p>
    </div>
  ));

  return (
    <div>
      {yksiloTuotteet}
    </div>
  );
}

//-----------------------------
const Tervehdys = (props) => {
  return (
    <div>
      <p>Hei {props.name}!</p>
    </div>
  )
}

const Tervehdyksia = () => {
  return (
    <div>
      <h1>Tervehdyksiä:</h1>
      <Tervehdys name="Arto" />
      <Tervehdys name="Pekka" />
    </div>
  )
}

//-------------------------------

const Tuote = (props) => {
  return(
    <div>
      <p>{props.nimi}: {props.hinta}€</p>
    </div>
  )
}

const Hintoja = () => {
  return(
    <div>
      <h1>Hintoja:</h1>
      <Tuote 
      nimi="Maito"
      hinta="0.7"
      />
      <Tuote 
      nimi="Peruna"
      hinta="1.2"
      />
      <Tuote 
      nimi="Omena"
      hinta="1.5"
      />
    </div>
  )
}

//-------------------------

const KokoNimi = (props) => {
  return(
    <p>{props.nimi} {props.sukunimi}</p>
  )
}

const Nimia = () => {
  return(
    <div>
      <h1>Nimiä: </h1>
      <KokoNimi 
      nimi="Pekka"
      sukunimi="Haavisto"
      />
      <KokoNimi 
      nimi="Mario"
      sukunimi="Hiltunen"
      />
    </div>
  )
}

//------------------------------------

const Kommentti = (props) => {
  return(
    <div>
      <p>{props.poliitikko}: <i>{props.teksti}</i></p>
    </div>
  )
}

const Kommentteja = () => {
  return(
    <div>
      <h1>Kommentteja:</h1>
      <Kommentti 
      poliitikko="Veikko Vennamo" 
      teksti="Kyllä kansa tietää" />
      <Kommentti 
      poliitikko="Mauno Koivisto" 
      teksti="Tarttis tehdä jotakin" />
      <Kommentti 
      poliitikko="Paavo Lipponen" 
      teksti="Nahkurin orsilla tavataan" />
      <Kommentti poliitikko="Timo Soini" 
      teksti="Jytky" />
    </div>
  )
}

//-----------------------------------

const Artikkeli = (props) => {
  return(
    <div>
      <h2>{props.otsikko}</h2>
      <p>{props.sisalto}</p>
    </div>
  )
}

const Artikkelia = () => {
  return(
    <div>
      <h1>Artikkelia:</h1>
      <Artikkeli 
      otsikko="Lorem"
      sisalto="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus voluptatibus nemo accusantium incidunt ea nam. Adipisci eligendi in dolorem, commodi maxime, pariatur natus debitis earum officiis, reiciendis cum minus temporibus!"
      />
      <Artikkeli 
      otsikko="Lorem ipsum"
      sisalto="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus voluptatibus nemo accusantium incidunt ea nam. Adipisci eligendi in dolorem, commodi maxime, pariatur natus debitis earum officiis, reiciendis cum minus temporibus!"
      />
    </div>
  )
}

//---------------------------------------

const Kirja = (props) => {
  return(
    <div>
      <h3>{props.otsikko}</h3>
      <p>Kirjailija: {props.kirjailija}</p>
      <p>Tyylilaji: {props.tyylilaji}</p>
    </div>
  )
}

const Kirjoja = () => {
  return(
    <div>
      <h1>Kirjoja:</h1>
      <Kirja 
      otsikko="Taru sormusten herrasta"
      kirjailija="J. R. R. Tolkien"
      tyylilaji="Fantasiakirjallisuus"
      />
      <Kirja 
      otsikko="Lorum ipsum"
      kirjailija="Mario"
      tyylilaji="Fantasiakirjallisuus"
      />
    </div>
  )
}

//----------------------------------------

const Tehtava = (props) => {
  return(
    <div>
      <p>Tehtävä: {props.kuvaus}</p>
      <p>Tila: {props.onValmis}</p>
    </div>
  )
}

const Tehtavia = () => {
  return(
    <div>
      <h1>Tehtäviä:</h1>
      {<Tehtava
      kuvaus="Tee kotitehtävä"
      onValmis="Valmis"
      />}
      {<Tehtava
      kuvaus="Laita ruoka"
      onValmis="Kesken"
      />}
    </div>
  )
}

//---------------------------

const Elain = (props) => {
  return(
    <div>
      <p>Nimi: {props.nimi}</p>
      <p>Laji: {props.laji}</p>
      <p>Ikä: {props.ika}</p>
    </div>
  )
}

const Elaimia = () => {
  return(
    <div>
      <h1>Elaimiä:</h1>
      {<Elain 
      nimi="Mirri"
      laji="Kissa"
      ika="6"
      />}
      {<Elain 
      nimi="Elsa"
      laji="Koira"
      ika="2"
      />}
    </div>
  )
}

//-----------------------------

const Elokuva = (props) => {
  return (
    <div>
      <p>Nimi: {props.nimi}</p>
      <p>Ohjaaja: {props.ohjaaja}</p>
      <p>Vuosi: {props.vuosi}</p>
    </div>
  )
}

const Elokuvia = () => {
  return(
    <div>
      <h1>Elokuvia:</h1>
      {<Elokuva
      nimi="Avatar"
      ohjaaja="James Cameron"
      vuosi="2017"
      />}
      {<Elokuva
      nimi="Avatar 2"
      ohjaaja="James Cameron"
      vuosi="2019"
      />}
    </div>
  )
}

//-----------------------------------

const Saa = (props) => {
  return(
    <div>
      <p>Sijaitni: {props.sijainti}</p>
      <p>Lämpotila: {props.lampotila}</p>
      <p>Olosuhteet: {props.olosuhteet}</p>
    </div>
  )
}

const Saan_Tiedot = () => {
  return(
    <div>
      <h1>Sään Tiedot:</h1>
      {<Saa
      sijainti="Helsinki"
      lampotila="-1 °C"
      olosuhteet="Sateen mahdollisuus 0%"
      />}
      {<Saa
      sijainti="Vantaa"
      lampotila="0 °C"
      olosuhteet="Sateen mahdollisuus 10%"
      />}
  </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <div>{<Navigointi />}</div>
      <br />
      <br />
      <DivElementti />
      < Otsikot />
      < Kappale />
      < Lista />
      < Kuva />
      < br/>
      < Linkki />
      <br />
      <br />
      < Taulukko />
      < Ympyra />
      < Painikkeet />
      <br />
      < Sahkoposti />
      <br />
      < Kartta />
      <br />
      < Video />
      <br />
      < Video_2 />
      <br />
      <div>Vuoden aika: { <HaeVuodenAika /> }</div>
      <br />
      <div>Satunnaisluku: { <HaeSatunnaisluku /> }</div>
      <br />
      <div>{<TaulukkoListaksi />}</div>
      <br />
      <div>{<DynaaminenElementti />}</div>
      <br />
      <div>{<MapNumerot />}</div>
      <br />
      <div>{<MapNimet />}</div>
      <br />
      {<TuoteLista />}
      <br />
      <div>{<Tervehdyksia />}</div>
      <br />
      {<Hintoja />}
      <br />
      {<Nimia />}
      <br />
      {<Kommentteja />}
      <br />
      {<Artikkelia />}
      <br />
      <Kirjoja />
      <br />
      <Tehtavia />
      <br />
      <Elaimia/>
      <br />
      <Elokuvia/>
      <br />
      <Saan_Tiedot/>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
