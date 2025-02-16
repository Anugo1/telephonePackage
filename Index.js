class Telephone {
    constructor() {
        if (Telephone.instance) {
            return Telephone.instance;
        } else {
            this.contacts = new Set();
            this.observers = new Set();
            Telephone.instance = this;
        }
    }

    addPhoneNumber(phoneNumber) {
        if (this.contactExist(phoneNumber)) {
            console.log("Contact already exists");
        } else {
            this.contacts.add(phoneNumber);
        }
    }

    removePhoneNumber(phoneNumber) {
        if (this.contactExist(phoneNumber)) {
            this.contacts.delete(phoneNumber);
        } else {
            console.log("Contact doesn't exist");
        }
    }

    dialPhoneNumber(phoneNumber) {
        if (this.contactExist(phoneNumber)) {
            this.notifyObserver(phoneNumber);
        } else {
            console.log("Contact doesn't exist");
        }
    }

    addObserver(observer) {
        if (this.observerExist(observer)) {
            console.log("Observer already exists");
        } else {
            this.observers.add(observer);
        }
    }

    removeObserver(observer) {
        if (this.observerExist(observer)) {
            this.observers.delete(observer);
        } else {
            console.log("Observer doesn't exist");
        }
    }

    notifyObserver(phoneNumber) {
        this.observers.forEach(observer => {
            observer.update(phoneNumber);
            console.log("");
        });
    }

    contactExist(phoneNumber) {
        return this.contacts.has(phoneNumber);
    }

    observerExist(observer) {
        return this.observers.has(observer);
    }
}

class Observer1 {
    update(phoneNumber) {
        console.log(`Contact Details: Name: ${phoneNumber.fullName}\n\t\tNumber: ${phoneNumber.number}`);
    }
}

class Observer2 {
    update(phoneNumber) {
        console.log(`Now Dialing......${phoneNumber.number}`);
    }
}

const PhoneNumber = (firstName, lastName, number) => ({
    fullName: `${firstName} ${lastName}`,
    number
});

console.log("\nCreating contacts for Eke, Chukwuanugo, Humphery, Kingsley, Arinze, and Donald:");
const eke = PhoneNumber("Eke", "Chukwuanugo", "+2349023456789");
const humphery = PhoneNumber("Humphery", "Kingsley", "+2348076543210");
const arinze = PhoneNumber("Arinze", "Donald", "+2348076543210");
console.log(eke);
console.log(humphery);
console.log(arinze);

console.log("\nCreating two Telephone objects and adding contacts and observers to just one but they both return the same thing.\n");
const telephone1 = new Telephone();
const telephone2 = new Telephone();

const observer1 = new Observer1();
const observer2 = new Observer2();

telephone1.addPhoneNumber(eke);
telephone1.addPhoneNumber(humphery);
telephone1.addPhoneNumber(arinze);

telephone1.addObserver(observer1);
telephone1.addObserver(observer2);

console.log("Telephone1:");
console.log(telephone1);
console.log("\nTelephone2:");
console.log(telephone2);

console.log("\nDeleting Arinze's contact:");
telephone1.removePhoneNumber(arinze);
console.log(telephone1);

console.log("\nCalling Eke:");
telephone1.dialPhoneNumber(eke);

console.log("Calling Humphery:");
telephone1.dialPhoneNumber(humphery);
