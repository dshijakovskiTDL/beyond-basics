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

##### ALL Supported banknotes: 5, 10, 20, 100, 500, 1000

> **Important**: The `1` banknote is supported by default 

The user creates the ATM at the beginning of the app, providing the supported banknotes - they can either choose to support some of the banknotes, or support all of the banknotes provided above.

#### Initializing the ATM
At the beginning of the app, the ATM object is `null` - meaning it is not initialized. \
To create the ATM, the user must send a `POST request` to the ATM API endpoint `/` with the body

```json
{ 
    "banknotes": number[] | null
}
```

Notice the `banknotes` field can be `null` - the user can pass in `null` for the ATM to support all the default banknotes. \
Alternatively, they can pass in an array of numbers, containing a subset of the supported banknotes.

Ex.
```json
{
    "banknotes": [10, 100, 1000]
}
```
If the user chooses the above configuration - the ATM object (initially) would look like this:

```js
    const ATM = {
        1: 0, // supported by default
        10: 0,
        100: 0,
        1000: 0,
        total: 0
    };
```

&nbsp;

> **Important**: If the list of banknotes contains a banknote that isn't supported - the entire list is considered invalid and an `error` should be returned.

```json
{
    "error": "Invalid list of banknotes!"
}
```

&nbsp;


> **Important**: If the user makes a request to **deposit** or **withdraw** money, and the ATM hasn't been initialized, an `error` should be returned.

```json
{
    "error": "ATM not initialized!"
}
```

&nbsp;

#### Deposit
To deposit money into the ATM, the user can send a `POST request` to the ATM API endpoint `/deposit` with the body

```json
{
    "amount": number
}
```

#### Withdraw
To withdraw money from the ATM, the user can send a `GET request` to the ATM API endpoint `/withdraw?amount={number}`

### Task

The main task is to program the ATM to insert and return banknotes in the most efficient way possible. \
What this means is that both when **depositing** (inserting) and **withdrawing** (returning) money - the ATM should do that using **the least amount of banknotes as possible** with the banknotes that it supports.

Ex.

Let's say the ATM is empty and looks like this:

```js
const ATM = {
    1: 0, // Again, supported by default
    10: 0,
    20: 0,
    100: 0,
    total: 0
}
```

If we then choose to store **390 TDL dollars** into it, the most efficient way to do that would be to store it with:
- 3 x 100 banknotes => **300**
- 4 x 20 banknotes => **80**
- 1 x 10 banknote => **10**
- Total: **390**

So, after that operation the ATM should look like this:

```js
const ATM = {
    1: 0,
    10: 1,
    20: 4,
    100: 3,
    total: 390
}
```

If we then choose to take out **70 TDL dollars**, the most efficient way to do that would be to return them using:
- 3 x 20 banknotes => **60**
- 1 x 10 banknote => **10**
- Total: **70**

So after that operation the ATM should look like this:

```js
const ATM = {
    1: 0,
    10: 0,
    20: 1,
    100: 3,
    total: 320
}
```

Your job will be to figure out the algorithm to do this efficient depositing and withdrawal operation.

&nbsp;

> **Important**: If there are not enough money in the ATM, an `error` should be returned.

```json
{
    "error": "Not enough money in the ATM!"
}
```
