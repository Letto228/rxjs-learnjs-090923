import { chunk } from "lodash";
import { Card } from "./card.interface";

export function requestToHtmlString(cards: Card[]): string {
    const htmlCards = cards.map(createCard);
    const groupedCards = chunk(htmlCards, 3).map(createRow);

    return groupedCards.join('');
}

function createCard({name, description, owner}: Card): string {
    return `
    <div class="col-sm-6 col-md-4">
        <div class="card">
            <img class="card-img" src=${owner.avatar_url} alt=${name}>
            <div class="card-body">
                <h3 class="card-title">${name}</h3>
                <p class="card-text">${description}</p>
            </div>
        </div>
    </div>
    `;
}

function createRow(htmlStrings: string[]): string {
    return `<div class="row">${htmlStrings.join(' ')}</div>`;
}