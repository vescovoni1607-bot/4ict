// Esercizio 4: Crea una funzione che raggruppa gli utenti per regione e restituisce un oggetto in cui le chiavi sono i nomi delle regioni
// e i valori sono array di oggetti contenenti nome e cognome degli utenti di quella regione.
// Utilizza solamente i metodi degli array (es. .map(), .filter(), .reduce(), ecc.) senza usare cicli for o while.
// Scrivi funzioni pure (senza effetti collaterali).

// Esempio di output atteso:
// {
//   veneto: [
//     { nome: 'Mario', cognome: 'Rossi' },
//     { nome: 'Sara', cognome: 'Neri' },
//     { nome: 'Luca', cognome: 'Gialli' },
//     { nome: 'Francesca', cognome: 'Arancioni' },
//   ],
//   lombardia: [ ... ],
//   piemonte: [ ... ],
//


const utenti = [
  { nome: "Mario", cognome: "Rossi", regione: "Lombardia" },
  { nome: "Luigi", cognome: "Bianchi", regione: "Lazio" },
  { nome: "Anna", cognome: "Verdi", regione: "Lombardia" },
  { nome: "Paolo", cognome: "Neri", regione: "Sicilia" },
  { nome: "Sara", cognome: "Blu", regione: "Lazio" }
];

function TrasformaUtenti (utente) {
  return "" + utente.nome + "," utente.regione
}
const result = utenti.map(trasformaUtente)
console.log(result)