# Telephone Observer Pattern

## Description
This project implements a **Telephone** class in JavaScript using the **Observer Pattern**. The telephone class allows managing a list of contacts and dialing phone numbers, while observers are notified when a number is dialed. 

The code features:
- **Adding and Removing Phone Numbers**
- **Dialing a Phone Number** (only if it's in the contact list)
- **Observer Pattern** (observers are notified when a number is dialed)

## Features
- **Singleton Pattern**: Ensures only one instance of `Telephone` exists.
- **Observer Pattern**: Supports adding and notifying observers.
- **Factory Function for Contacts**: Encapsulates contact creation logic.
- **Phone Contact Management**: Ability to add and remove contacts.

## Classes and Functions

### `Telephone` Class
This is the core class managing contacts and observers.
- `addPhoneNumber(phoneNumber)`: Adds a new contact.
- `removePhoneNumber(phoneNumber)`: Removes an existing contact.
- `dialPhoneNumber(phoneNumber)`: Notifies observers when dialing a number.
- `addObserver(observer)`: Adds an observer.
- `removeObserver(observer)`: Removes an observer.
- `notifyObserver(phoneNumber)`: Notifies all observers when a number is dialed.

### `Observer1` Class
Prints detailed contact information when notified.
```javascript
class Observer1 {
    update(phoneNumber) {
        console.log(`Contact Details: Name: ${phoneNumber.fullName}\n\t\tNumber: ${phoneNumber.number}`);
    }
}
```

### `Observer2` Class
Prints a simple dialing message when notified.
```javascript
class Observer2 {
    update(phoneNumber) {
        console.log(`Now Dialing......${phoneNumber.number}`);
    }
}
```

### `PhoneNumber` Factory Function
Creates a phone number object.
```javascript
const PhoneNumber = (firstName, lastName, number) => ({
    fullName: `${firstName} ${lastName}`,
    number
});
```

## Example Usage
```javascript
console.log("\nCreating contacts for Eke, Chukwuanugo, Humphery, Kingsley, Arinze, and Donald:");
const eke = PhoneNumber("Eke", "Chukwuanugo", "+2349023456789");
const humphery = PhoneNumber("Humphery", "Kingsley", "+2348076543210");
const arinze = PhoneNumber("Arinze", "Donald", "+2348076543210");

const telephone1 = new Telephone();

const observer1 = new Observer1();
const observer2 = new Observer2();

telephone1.addPhoneNumber(eke);
telephone1.addPhoneNumber(humphery);
telephone1.addPhoneNumber(arinze);

telephone1.addObserver(observer1);
telephone1.addObserver(observer2);

console.log("\nCalling Eke:");
telephone1.dialPhoneNumber(eke);
```

## Expected Output
```
Calling Eke:
Contact Details: Name: Eke Chukwuanugo
        Number: +2349023456789
Now Dialing......+2349023456789
```

## How to Run
1. Copy the JavaScript code into a file (e.g., `telephone.js`).
2. Run the script using Node.js:
   ```sh
   node telephone.js
   ```

## License
This project is open-source and free to use.

