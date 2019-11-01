import { LightningElement } from 'lwc';

const originalProducts = [
    {
        imgSrc: '/resources/assets/images/spoiler.jpg',
        title: 'Sport Spoiler',
        description:
            'This spoiler mounts to the rear of your car, improving looks and aerodynamics. Please see the product guide for speed-force curves and details on performance and efficiency impacts.',
        price: 295
    },
    {
        imgSrc: '/resources/assets/images/cover.jpg',
        title: 'Car Cover',
        description: `Don't have a garage?  Protect your Electron from the elements with this custom-fit, durable car cover.  It's easy to take on and off, weighs less than 2 pounds, and stows in its own mesh bag.`,
        price: 195
    },
    {
        imgSrc: '/resources/assets/images/dalmationharness.jpg',
        title: 'Pet-Friendly Travel Kit',
        description:
            'Hit the road with your pets and make sure they ride in safety and style. Kit includes a large dog harness, secure fastens for kennels and a pet blanket to protect your seats.',
        price: 95
    }
];

const solar = {
    imgSrc: '/resources/assets/images/solarkit.jpg',
    title: 'Roof mounted stowable solar array',
    description:
        'Charge your car anywhere. Mounts securely to roof rack, plugs into charging port, and folds flat to stow in cargo compartment. Requires roof rack. Great for camping, parking lots. Use only while vehicle is parked.',
    price: 695
};

export default class App extends LightningElement {
    products = originalProducts;

    toggleSolar() {
        if (this.products.length === 3) {
            this.products = [solar, ...originalProducts];
        } else {
            this.products = originalProducts;
        }
    }
}
