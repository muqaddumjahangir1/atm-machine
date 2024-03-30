import inquirer from "inquirer";
let user = await inquirer.prompt([
    {
        type: "string",
        name: "cardholdername",
        message: "welcome Muqaddum Jhangir",
    },
    {
        type: "number",
        name: "pincode",
        message: "enter yuor 4 digit pincode"
    },
    //     creating listing and withdrawal method
    {
        type: "list",
        name: "accountType",
        message: "select yuor account type",
        choices: ["current", "saving"]
    },
    //     transition type
    {
        type: "list",
        name: "transitionType",
        message: "select your transition type",
        choices: ["cash", "withdrawl"]
    },
    // selected amount
    {
        type: "list",
        name: "amount",
        message: "select your name",
        choices: [1000, 2000, 5000, 10000],
        when(user) {
            return user.transitionType === "cash";
        }
    },
    {
        type: "number",
        name: "amount",
        message: "Enter your amount",
        when(user) {
            return user.transitionType === "withdrawl";
        }
    }
]);
// final slip
if (user.pincode) {
    const balance = Math.floor(Math.random() * 1000 + 1);
    console.log(balance);
    const enteramount = user.account;
    if (enteramount <= balance) {
        const remaining = balance - enteramount;
        console.log(`you have withdrawal rupees ${enteramount} and you have remaining balance ${remaining}`);
    }
}
