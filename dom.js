document.addEventListener('DOMContentLoaded', (event) => {
    // Selecting the button
    const button = document.getElementById('select-button');
    
    button.addEventListener('click', () => {
        // Select and log various DOM nodes
        
        // Select by ID
        const firstParagraph = document.getElementById('first-paragraph');
        console.log('First Paragraph:', firstParagraph);

        // Select by class name
        const textElements = document.getElementsByClassName('text');
        console.log('Text Elements:', textElements);

        // Select all <p> elements
        const allParagraphs = document.getElementsByTagName('p');
        console.log('All Paragraphs:', allParagraphs);

        // Select using querySelector
        const firstTextElement = document.querySelector('.text');
        console.log('First .text element:', firstTextElement);

        // Select all items in the list using querySelectorAll
        const listItems = document.querySelectorAll('.item');
        console.log('List Items:', listItems);

        // Select nested paragraph
        const nestedParagraph = document.querySelector('#nested p');
        console.log('Nested Paragraph:', nestedParagraph);
    });
});