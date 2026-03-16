// Opdracht 1a

console.log('De afdeling sales heeft ' + departments.sales.numberOfEmployees + ' medewerkers');

// Opdracht 1b

console.log('Marketing is een leuke afdeling om te werken. ' + departments.marketing.description);

// Opdracht 1c

console.log('De afdeling Customer Service heeft ' + departments['customer-service'].numberOfEmployees + ' medewerkers');

// Opdracht 1d

console.log('Sales is een uitdagende afdeling om te werken als Verkoopmanager. ' + departments.sales.jobs[1].description)

// Opdracht 2 + 4

const getDepartment = prompt('Over welke afdeling wil je meer informatie? Kies uit: [marketing / sales / customer-service]');

if (getDepartment === 'marketing') {
    console.log(departments.marketing.description);
} else if (getDepartment === 'sales') {
    console.log(departments.sales.description);
} else if (getDepartment === 'customer-service') {
    console.log(departments['customer-service'].description);
} else {
    console.error('Ongeldige keuze. Probeer het opnieuw door de pagina te verversen.')
    document.getElementById('error-message').textContent = 'Ongeldige keuze. Probeer het opnieuw door de pagina te verversen.';
}

console.log(`${getDepartment} is een leuke afdeling om te werken. Er werken op dit moment ${departments[getDepartment].numberOfEmployees} medewerkers.`);


// Opdracht 3

const getFunction = prompt(`Je koos ${getDepartment}. Over welke functie wil je meer weten? Voer een getal tussen 0 en 3 in.
    \n0: ${departments[getDepartment].jobs[0].title}
    \n1: ${departments[getDepartment].jobs[1].title}
    \n2: ${departments[getDepartment].jobs[2].title}
    \n3: ${departments[getDepartment].jobs[3].title}`);

document.getElementById('role-title').textContent = departments[getDepartment].jobs[getFunction].title;

document.getElementById('department-description').textContent = departments[getDepartment].description;

document.getElementById('role-description').textContent = departments[getDepartment].jobs[getFunction].description;











