import wayPoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

export default class RevealOnScroll {
    constructor(els, offset) {
        this.itemsToReveal = document.querySelectorAll(els);
        this.offset = offset;
        this.hideInitially();
        this.createWaypoints();
    }

    hideInitially() {
        this.itemsToReveal.forEach((el) => {
            el.classList.add('reveal-item');
        });
    }

    createWaypoints() {
        this.itemsToReveal.forEach((el) => {
            new Waypoint({
                element: el,
                handler: () => {
                    el.classList.add("reveal-item--is-visible");
                },
                offset: this.offset
            });
        }, this);
    }
}
