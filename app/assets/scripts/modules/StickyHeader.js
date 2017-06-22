import wayPoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
const smoothScroll = require('smoothscroll');

export default class StickyHeader {
    constructor() {
        this.siteHeader = document.querySelector('.site-header');
        this.headerTrigger = document.querySelector('.large-hero__title');
        this.createHeaderWaypoint();
        this.pageSections = document.querySelectorAll('.page-section');
        this.headerLinks = document.querySelectorAll('.primary-nav a');
        this.createPageSectionWaypoints();
        
    }

    createHeaderWaypoint() {
        const self = this;
        new Waypoint({
            element: self.headerTrigger,
            handler: (direction) => {
                if (direction === 'down') {
                    self.siteHeader.classList.add('site-header--dark');
                } else {
                    self.siteHeader.classList.remove('site-header--dark');
                }
            }
        });
    }

    createPageSectionWaypoints() {
        this.pageSections.forEach((el) => {
            new Waypoint({
                element: el,
                handler: (direction) => {
                    if (direction === 'down') {
                        const matchingHeaderLink = document.querySelector(el.getAttribute('data-matching-link'));
                    this.headerLinks.forEach((el) => {
                        el.classList.remove('is-current-link');
                    });
                    matchingHeaderLink.classList.add('is-current-link');
                    }
                },
                offset: "18%"
            });
            new Waypoint({
                element: el,
                handler: (direction) => {
                    if (direction === 'up') {
                        const matchingHeaderLink = document.querySelector(el.getAttribute('data-matching-link'));
                    this.headerLinks.forEach((el) => {
                        el.classList.remove('is-current-link');
                    });
                    matchingHeaderLink.classList.add('is-current-link');
                    }
                },
                offset: "40%"
            })
        }, this);
    }
}
