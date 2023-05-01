// click on an item to edit item
// delete items
// add items
// stats
// our list
let roster = [];
// the item we are editing
let current_id = 0;
let next_id = 999;

function create_demo_roster() {
    roster.push({
        week: '1',
        grade: 0,
        absences: 0,
        days: 0,
        days2: 0,
    });
    roster.push({
        week: '2',
        grade: 0,
        absences: 0,
        days: 0,
        days2: 0,
    });
    roster.push({
        week: '3',
        grade: 0,
        absences: 0,
        days: 0,
        days2: 0,
    });
    roster.push({
        week: '4',
        grade: 0,
        absences: 0,
        days: 0,
        days2: 0,
    });
        roster.push({
        week: '5',
        grade: 0,
        absences: 0,
        days: 0,
        days2: 0,
    });
    roster.push({
        week: '6',
        grade: 0,
        absences: 0,
        days: 0,
        days2: 0,
    });
    roster.push({
        week: '7',
        grade: 0,
        absences: 0,
        days: 0,
        days2: 0,
    });
    roster.push({
        week: '8',
        grade: 0,
        absences: 0,
        days: 0,
        days2: 0,
    });
        roster.push({
        week: '9',
        grade: 0,
        absences: 0,
        days: 0,
        days2: 0,
    });
    roster.push({
        week: '10',
        grade: 0,
        absences: 0,
        days: 0,
        days2: 0,
    });
    roster.push({
        week: '11',
        grade: 0,
        absences: 0,
        days: 0,
        days2: 0,
    });
    roster.push({
        week: '12',
        grade: 0,
        absences: 0,
        days: 0,
        days2: 0,
    });
        roster.push({
        week: '13',
        grade: 0,
        absences: 0,
        days: 0,
        days2: 0,
    });
    roster.push({
        week: '14',
        grade: 0,
        absences: 0,
        days: 0,
        days2: 0,
    });
    roster.push({
        week: '15',
        grade: 0,
        absences: 0,
        days: 0,
        days2: 0,
    });
    roster.push({
        week: '16',
        grade: 0,
        absences: 0,
        days: 0,
        days2: 0,
    });
        roster.push({
        week: '17',
        grade: 0,
        absences: 0,
        days: 0,
        days2: 0,
    });
    roster.push({
        week: '18',
        grade: 0,
        absences: 0,
        days: 0,
        days2: 0,
    });
}

function calculateTotal(p, stat) {
    let grade = 0;
    let absences = 0;
    if(stat == 'grade') {
        for(let i = 0; i < p.length; i++) {
            grade += p[i].grade;
        }
        grade /= p.length;
        grade = Math.floor(grade * 100) / 100;
        return grade;
    }
    if(stat == 'absence') {
        for(let i = 0; i < 2; i++) {
            absences += p[i].absences;
        }
        if (absences === 20) {
            absences = Math.floor(absences * 100) / 2;
        } else {
            absences = Math.floor(absences * 100);
        }
        return absences;
    }
    return 0;
}

function load_roster_to_html() {
    let new_html = '';
    new_html += '<tr><th>Week#</th><th>Easy Day (1)</th><th>Hard Day* (1)</th><th>Easy Day (2)</th><th>Long Run</th><th>Easy Day (3)</th><th>Hard Day* (2)</th><th>Approximate Weekly Mileage</th><th>Date</th></tr>';
    for(let i = 0; i < 1; i++) {
        new_html += "<tr><td onclick='edit_item(this.id)' data-element= 'absence2' data-index='" + i + "'id='item1" + i + "'>" + roster[i].absences + "</td>";
    }
    for(let i = 0; i < 18; i++) {
        new_html += "<tr><td onclick='edit_item(this.id)' data-element= 'week' data-index='" + i + "'id='item0" + i + "'>" + roster[i].week + "</td>";
        // new_html += "<td onclick='edit_item(this.id)' data-element= 'grade' data-index='" + i + "'id='item1" + i + "'>" + roster[i].grade + "</td>";
        // new_html += "<td onclick='edit_item(this.id)' data-element= 'absence' data-index='" + i + "'id='item2" + i + "'>" + roster[i].absences + "</td>";
        new_html += "<td onclick='edit_item(this.id)' data-element= 'absence' data-index='" + i + "'id='item1" + i + "'>" + roster[i].days + "</td>";
        // new_html += "<td onclick='edit_item(this.id)' data-element= 'days' data-index='" + i + "'id='item3" + i + "'>" + roster[i].days2 + "</td>";
        // new_html += "<td onclick='edit_item(this.id)' data-element= 'days' data-index='" + i + "'id='item4" + i + "'>" + roster[i].days + "</td>";
        // new_html += "<td onclick='edit_item(this.id)' data-element= 'days' data-index='" + i + "'id='item4" + i + "'>" + roster[i].days + "</td>";
        // new_html += "<td onclick='edit_item(this.id)' data-element= 'days' data-index='" + i + "'id='item4" + i + "'>" + roster[i].days + "</td>";
        // new_html += "<td onclick='edit_item(this.id)' data-element= 'days' data-index='" + i + "'id='item4" + i + "'>" + roster[i].days + "</td>";
    // new_html += "<td class='total'>" + calculateTotal(roster, 'absence') + "</td>";
    new_html += "<td class='total'>" + calculateTotal(roster, 'absence') + "</td>";
    // new_html += "<td class='total'>" + calculateTotal(roster, 'absence') + "</td>";
    // new_html += "<td class='total'>" + calculateTotal(roster, 'absence') + "</td>";
    // new_html += "<td class='total'>" + calculateTotal(roster, 'absence') + "</td>";
    // new_html += "<td class='total'>" + calculateTotal(roster, 'absence') + "</td>";
    // new_html += "<td class='total'>" + calculateTotal(roster, 'absence') + "</td>";
    // new_html += "<td class='total'>" + calculateTotal(roster, 'absence') + "</td>";
    // new_html += "<td class='total'>" + calculateTotal(roster, 'absence') + "</td>";
    }
    new_html += '</table>';
    // new_html += "<td class='total'>" + calculateTotal(roster, 'absence') + "</td>";
    // new_html += "<td class='total'>" + calculateTotal(roster, 'absence') + "</td>";
    // new_html += "<td class='total'>" + calculateTotal(roster, 'absence') + "</td>";
    // new_html += "<td class='total'>" + calculateTotal(roster, 'absence') + "</td>";
    // new_html += "<td class='total'>" + calculateTotal(roster, 'absence') + "</td>";
    // new_html += "<td class='total'>" + calculateTotal(roster, 'absence') + "</td>";
    // new_html += "<td class='total'>" + calculateTotal(roster, 'absence') + "</td>";
    // new_html += "<td class='total'>" + calculateTotal(roster, 'absence') + "</td>";
    // new_html += "<td class='total'>" + calculateTotal(roster, 'absence') + "</td>";
    
    document.getElementById('roster').innerHTML = new_html;
}

function edit_change() {
    if(current_id == 0) return;
    let element = document.getElementById(current_id);
    let i = parseFloat(element.dataset.index);
    let e = element.dataset.element;
    // bad solution but it works
    // if(e == 'week') roster[i].week = document.getElementById('input').value;
    // if(e == 'grade') roster[i].grade = parseFloat(document.getElementById('input').value);
    if (e == 'absence2') {
    if (parseFloat(document.getElementById('input').value) == 20) {
        roster[i].absences = 20;
    } else {
        roster[i].absences = parseFloat(document.getElementById('input').value);
    }
    }
    // if(e == 'days') roster[i].days = parseFloat(document.getElementById('input').value);
    load_roster_to_html();
}

function edit_item(id) {
    current_id = id;
    document.getElementById('input').value = document.getElementById(id).innerHTML;
}

function add_current() {
    roster.push({
        week: '',
        grade: 0.0,
        absences: 0,
    });
    next_id++;
    load_roster_to_html();
}

function delete_current() {
    if(current_id == 0) return;
    let element = document.getElementById(current_id);
    let i = parseInt(element.dataset.index);
    roster.splice(i, 1);
    current_id = 0;
    load_roster_to_html();
}
create_demo_roster();
// call the function to populate our table with the data we put
load_roster_to_html();