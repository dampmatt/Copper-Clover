export class Menu{
    constructor(){
        this.starter=[
            ["Beef Wellington tart", "27.49"],
            ["The ultimate 'cheese cake'", "16.83"],
            ["Tuna empanadillas", "13.76"],
            ["Sweet fried saganaki", "7.12"],
            ["Bacon rings", "10.56"],
            ["Butter chicken vol-au-vents", "22.34"],
            ["Prawn and ginger dumplings", "15.62"]
        ];
        this.main=[
            ["Italian Risotto with Truffles", "32.50"],
            ["Japanese Sushi Platter", "47.30"],
            ["Mexican Tacos al Pastor", "19.80"],
            ["Indian Butter Chicken with Naan", "22.15"],
            ["French Duck Confit", "50.25"],
            ["Greek Moussaka", "25.60"],
            ["Thai Green Curry with Jasmine Rice", "28.75"],
            ["Spanish Paella", "37.40"],
            ["Korean BBQ Beef Bulgogi", "39.10"],
            ["Chinese Peking Duck", "45.85"]
        ];
        this.dessert=[
            ["Italian Tiramisu", "11.20"],
            ["French Crème Brûlée", "13.75"],
            ["American New York Cheesecake", "10.50"],
            ["Japanese Mochi Ice Cream", "7.90"],
            ["Turkish Baklava", "12.30"],
            ["Greek Loukoumades", "6.85"],
            ["Indian Gulab Jamun", "8.40"],
            ["Mexican Churros with Chocolate", "12.15"],
            ["Austrian Apple Strudel", "10.55"],
            ["Belgian Chocolate Mousse", "14.45"]
        ]
        ;
    }

    get starters(){
        return this.starter;
    }
    get mainCourse(){
        return this.main;
    }
    get desserts(){
        return this.dessert;
    }
}