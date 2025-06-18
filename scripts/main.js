// Opdracht 1a

console.log('De afdeling sales heeft ' + departments.sales.numberOfEmployees + ' medewerkers');

// Opdracht 1b

console.log('Marketing is een leuke afdeling om te werken. ' + departments.marketing.description);

// Opdracht 1c

console.log('De afdeling Customer Service heeft ' + departments['customer-service'].numberOfEmployees + ' medewerkers');

// Opdracht 1d

console.log('Sales is een uitdagende afdeling om te werken als Verkoopmanager. ' + departments.sales.jobs[1].description);








// Opdracht 2 + 4

const whichDepartment = prompt('Over welke afdeling wil je meer informatie? Kies uit: [marketing / sales / customer-service]');

if (whichDepartment === 'marketing') {
    console.log(departments.marketing.description);
} else if (whichDepartment === 'sales') {
    console.log(departments.sales.description);
} else if (whichDepartment === 'customer-service') {
    console.log(departments['customer-service'].description);
} else {
    console.error('Ongeldige keuze. Probeer het opnieuw door de pagina te verversen.')
    document.getElementById('error-message').textContent = 'Ongeldige keuze. Probeer het opnieuw door de pagina te verversen.';
}

console.log(`${whichDepartment} is een leuke afdeling om te werken. Er werken op dit moment ${departments[whichDepartment].numberOfEmployees} medewerkers.`);


// Opdracht 3

const whichFunction = prompt(`Je koos ${whichDepartment}. Over welke functie wil je meer weten? Voer een getal tussen 0 en 3 in.
    \n0: ${departments[whichDepartment].jobs[0].title}
    \n1: ${departments[whichDepartment].jobs[1].title}
    \n2: ${departments[whichDepartment].jobs[2].title}
    \n3: ${departments[whichDepartment].jobs[3].title}`);

document.getElementById('role-title').textContent = departments[whichDepartment].jobs[whichFunction].title;

document.getElementById('department-description').textContent = departments[whichDepartment].description;

document.getElementById('role-description').textContent = departments[whichDepartment].jobs[whichFunction].description;



// switch (whichFunction) {
//     case '0':
//         console.log(departments[whichDepartment].jobs[0].description);
//
//         document.getElementById('role-title').textContent = departments[whichDepartment].jobs[0].title;
//
//         document.getElementById('department-description').textContent = departments[whichDepartment].description;
//
//         document.getElementById('role-description').textContent = departments[whichDepartment].jobs[0].description;
//         break;
//     case '1':
//         console.log(departments[whichDepartment].jobs[1].description);
//
//         document.getElementById('role-title').textContent = departments[whichDepartment].jobs[1].title;
//
//         document.getElementById('department-description').textContent = departments[whichDepartment].description;
//
//         document.getElementById('role-description').textContent = departments[whichDepartment].jobs[1].description;
//         break;
//     case '2':
//         console.log(departments[whichDepartment].jobs[2].description);
//
//         document.getElementById('role-title').textContent = departments[whichDepartment].jobs[2].title;
//
//         document.getElementById('department-description').textContent = departments[whichDepartment].description;
//
//         document.getElementById('role-description').textContent = departments[whichDepartment].jobs[2].description;
//         break;
//     case '3':
//         console.log(departments[whichDepartment].jobs[3].description);
//
//         document.getElementById('role-title').textContent = departments[whichDepartment].jobs[3].title;
//
//         document.getElementById('department-description').textContent = departments[whichDepartment].description;
//
//         document.getElementById('role-description').textContent = departments[whichDepartment].jobs[3].description;
//         break;
//     default:
//         console.error('Ongeldige keuze. Probeer het opnieuw door de pagina te verversen.');
//
//         document.getElementById('error-message').textContent = 'Ongeldige keuze. Probeer het opnieuw door de pagina te verversen.';
// }











