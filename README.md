## Beyond the Basics of JavaScript
### Intermediate level JavaScript course

##### Daniel Shijakovski - Web Developer

### ATM Machine with API endpoints

This application represents a simplified version of an ATM.
To start off, the ATM machine is empty. The user can then either **deposit** or **withdraw** money from it.

#### ATM data model
The ATM will be represented by an object with the following properties:
- `total` - representing the total amount of TDL dollars currently stored in the ATM
- dynamic keys representing the banknotes that the ATM can support

> The user creates the ATM at the beginning of the app, providing the supported banknotes

Ex. If the ATM supports banknotes of 10, 20, 50, 100, 500 TDL dollars - the ATM object (initially) would look like this:

```js
    const ATM = {
        10: 0,
        20: 0,
        50: 0,
        100: 0,
        500: 0,
        total: 0
    };
```

#### Initializing the ATM


