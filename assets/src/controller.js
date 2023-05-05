'use strict';

import {Controller} from '@hotwired/stimulus';

import Ckeditor from "./ckeditor";

export default class extends Controller {
    connect() {
        Ckeditor
            .create(this.element, this.config)
            .then(editor => {
                // console.log(Array.from( editor.ui.componentFactory.names() ))
            })
            .catch(error => {
                console.error(error);
            });
    }

    initialize() {
        if (this.data.get('language')) {
            this.config = {
                language: this.data.get('language')
            };
        }

        const pre_config = Object.assign({}, this.config);
        const config_s = this.data.get('config')
        const config = config_s ? JSON.parse(config_s) : {}
        this.config = Object.assign({}, pre_config, config)

        this.checkMentionRenderer();
    }

    checkMentionRenderer() {
        if (this.config.hasOwnProperty('mention') ) {
            let feeds = [];

            this.config.mention.feeds.forEach((feed) => {
               if (feed.renderer) {
                   feed = Object.assign({itemRenderer: this.itemRenderer}, feed);
               }

                feeds.push(feed);
            });

            this.config.mention.feeds = feeds;
        }
    }

    itemRenderer(item) {
        const buttonElement = document.createElement( 'button' );
        const itemElement = document.createElement( 'span' );
        const helpElement = document.createElement('span');

        buttonElement.type = 'button';
        buttonElement.classList.add('ck');
        buttonElement.classList.add('ck-button');
        buttonElement.classList.add('ck-button_with-text');
        itemElement.classList.add('ck');
        itemElement.classList.add('ck-button__label');
        helpElement.classList.add('ck');
        helpElement.classList.add('ck-button__help');

        itemElement.textContent = `${ item.description } `;
        helpElement.textContent = item.id;

        itemElement.appendChild( helpElement );
        buttonElement.appendChild(itemElement);

        return buttonElement;
    }
}