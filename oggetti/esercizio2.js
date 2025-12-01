/* data la lista di utenti con le loro porprietà: nome, congome, regione 
crei un oggetto dove i campi sono in nomi delle regioni che compaiono, 
e il valore è il numero di volte che compaiono all'interno dell'array delle persone */
// Lista di utenti di esempio
const utenti = [
  { nome: "Mario", cognome: "Rossi", regione: "Lombardia" },
  { nome: "Luigi", cognome: "Bianchi", regione: "Lazio" },
  { nome: "Anna", cognome: "Verdi", regione: "Lombardia" },
  { nome: "Paolo", cognome: "Neri", regione: "Sicilia" },
  { nome: "Sara", cognome: "Blu", regione: "Lazio" }
];

function TrasformaUtenti (utente) {
  return utente.nome + utente.regione
}
const.result = utenti.map(trasformaUtente)
console.log(result)
 
// Creiamo l'oggetto con i conteggi per regione
const conteggioRegioni = utenti.reduce((acc, utente) => {
  const regione = utente.regione;
  acc[regione] = (acc[regione] || 0) + 1;
  return acc;
}, {});

// Output
console.log(conteggioRegioni);

