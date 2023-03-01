var ark = '{"First_Name" : "ARK", "Last_Name" : "VACHHANI", "Location" : "GUJARAT", "Gender" : "MALE"}';
        const obj = JSON.parse(ark);
        let t = `First-Name:- ${obj.First_Name} <br>  Last-Name:- ${obj.Last_Name} <br> Location: ${obj.Location} <br> Gender: ${obj.Gender} <br>`;
        document.getElementById('P').innerHTML = t;
