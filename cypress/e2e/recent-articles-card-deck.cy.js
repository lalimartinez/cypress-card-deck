describe('Homepage Recent Articles Card Deck', () => {
    beforeEach(() => {
        cy.visit('https://www.webstacks.com/')
    })

    it('checks card deck section items', () => {
        //recent articles section exists
        cy.get('#homepage-recent-articles-section').should('exist')

        //section has a heading
        cy.get('.emBbhZ > .Heading-sc-1lllqhh-0').should('exist').contains('Recent articles')

        //section has a subheading
        cy.get('.emBbhZ > .Text-sc-1y3bhyp-0').should('exist')
            .contains('Check out the web knowledge in B2B tech collected and distilled by experienced professionals.')

        //button exists
        cy.getByInternalName('Read all blog articles').should('exist').contains('Read all blog articles')

        //card deck exists
        cy.get('.slick-list').should('exist')

        //slider exists
        cy.get('.slick-dots').should('exist')

        //previous and next arrow buttons exist
        cy.get('.RecentArticles___StyledContainer-sc-1csjasn-1 > .slick-slider > .slick-prev').should('exist')
        cy.get('.RecentArticles___StyledContainer-sc-1csjasn-1 > .slick-slider > .slick-next').should('exist')

        //cards have an image
        cy.get('.slick-track').eq(1)
            .find('.slick-slide').as('card')
        cy.get('@card').each(($item) => {
            cy.wrap($item).find('img').eq(0).should('exist')
        })

        //cards contain a badge
        cy.get('@card').each(($item) => {
            cy.wrap($item).find('h6').should('exist').and('not.be.empty')
        })

        //cards contain time to read
        cy.get('@card').each(($item) => {
            cy.wrap($item).find('.hGtbMo').should('exist').contains(' minute read')
        })

        //cards contain a heading
        cy.get('@card').each(($item) => {
            cy.wrap($item).find('h5').should('exist').and('not.be.empty')
        })

        //cards contain description 
        cy.get('@card').each(($item) => {
            cy.wrap($item).find('p').should('exist').and('not.be.empty')
        })

        //cards contain author image
        cy.get('@card').each(($item) => {
            cy.wrap($item).find('img').eq(1).should('exist')
        })

        //cards contain author name
        cy.get('@card').each(($item) => {
            cy.wrap($item).find('.jelLTb').should('exist').and('not.be.empty')
        })

        //cards contain date
        cy.get('@card').each(($item) => {
            cy.wrap($item).find('.gBYFFB').should('exist').and('not.be.empty')
        })
    })


    context('Clicks items', () => {
        it('clicks read all blog articles button', () => {
            cy.getByInternalName('Read all blog articles').click()
            cy.location('pathname').should('eq', '/blog')
        })

        it('clicks next arrow', () => {
            cy.get('.RecentArticles___StyledContainer-sc-1csjasn-1 > .slick-slider > .slick-next')
                .invoke('attr', 'currentslide').should('eq', '0')
            cy.get('.RecentArticles___StyledContainer-sc-1csjasn-1 > .slick-slider > .slick-next').click()
            cy.get('.RecentArticles___StyledContainer-sc-1csjasn-1 > .slick-slider > .slick-next')
                .invoke('attr', 'currentslide').should('eq', '1')
        })

        it('clicks previous arrow', () => {
            cy.get('.RecentArticles___StyledContainer-sc-1csjasn-1 > .slick-slider > .slick-prev')
                .invoke('attr', 'currentslide').should('eq', '0')
            cy.get('.RecentArticles___StyledContainer-sc-1csjasn-1 > .slick-slider > .slick-prev').click()
            cy.get('.RecentArticles___StyledContainer-sc-1csjasn-1 > .slick-slider > .slick-prev')
                .invoke('attr', 'currentslide').should('eq', '4')
        })

        it('checks href is not empty', () => {
            cy.get('.slick-track').eq(1)
                .find('.slick-slide')
                .each(($slide) => {
                    cy.wrap($slide).find('a').should('have.attr', 'href').and('not.be.empty')
                })
        })
    })

    context('Image data', () => {
        it('images on cards have src and alt attributes', () => {
            cy.get('.slick-track').eq(1)
                .find('.slick-slide')
                .each(($slide) => {
                    cy.wrap($slide).find('img').eq(0).should('have.attr', 'src').and('not.be.empty')
                    cy.wrap($slide).find('img').eq(0).should('have.attr', 'alt').and('not.be.empty')
                })
        })

        it('author images have src and alt attributes', () => {
            cy.get('.slick-track').eq(1)
                .find('.slick-slide')
                .each(($slide) => {
                    cy.wrap($slide).find('img').eq(1).should('have.attr', 'src').and('not.be.empty')
                    cy.wrap($slide).find('img').eq(1).should('have.attr', 'alt').and('not.be.empty')
                })
        })
    })

    context('Card deck heading component items contain correct colors and font families', () => {
        it('card deck heading contains correct color & font-family', () => {
            cy.get('.emBbhZ > .Heading-sc-1lllqhh-0').should('have.css', 'color', 'rgb(157, 200, 251)')
            cy.get('.emBbhZ > .Heading-sc-1lllqhh-0').should('have.css', 'font-family', 'Soehne, sans-serif')
        })

        it('card deck subheading contains correct color & font-family', () => {
            cy.get('.emBbhZ > .Text-sc-1y3bhyp-0').should('have.css', 'color', 'rgb(216, 233, 253)')
            cy.get('.emBbhZ > .Text-sc-1y3bhyp-0').should('have.css', 'font-family', 'Soehne, sans-serif')
        })

        it('read all blog aritcles button contains correct colors & font-family', () => {
            cy.getByInternalName('Read all blog articles').should('have.css', 'border', '1px solid rgb(5, 54, 113)')
            cy.getByInternalName('Read all blog articles').should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
            cy.getByInternalName('Read all blog articles').should('have.css', 'color', 'rgb(9, 105, 221)')
            cy.getByInternalName('Read all blog articles').should('have.css', 'font-family', 'Soehne, sans-serif')
        })
    })

    context('Card items contain the correct colors and font families', () => {
        beforeEach(() => {
            cy.get('.slick-track').eq(1)
                .find('.slick-slide').as('card')
        })

        it('the card badges contain the correct css values', () => {
            cy.get('@card')
                .each(($slide) => {
                    cy.wrap($slide).find('h6').should('have.css', 'background-color', 'rgb(3, 19, 62)')
                    cy.wrap($slide).find('h6').should('have.css', 'color', 'rgb(122, 156, 249)')
                    cy.wrap($slide).find('h6').should('have.css', 'font-family', 'Soehne, sans-serif')
                })
        })

        it('the time to read contains the correct color & font-family', () => {
            cy.get('@card').each(($slide) => {
                cy.wrap($slide).find('.hGtbMo').should('have.css', 'color', 'rgb(197, 222, 253)')
                cy.wrap($slide).find('.hGtbMo').should('have.css', 'font-family', 'Soehne, sans-serif')
            })
        })

        it('the h5 headings contain the correct css values', () => {
            cy.get('@card')
                .each(($slide) => {
                    cy.wrap($slide).find('h5').should('have.css', 'color', 'rgb(216, 233, 253)')
                    cy.wrap($slide).find('h5').should('have.css', 'font-family', 'Soehne, sans-serif')
                })
        })

        it('the p text contains the correct css values', () => {
            cy.get('@card')
                .each(($slide) => {
                    cy.wrap($slide).find('p').should('have.css', 'color', 'rgb(216, 233, 253)')
                    cy.wrap($slide).find('p').should('have.css', 'font-family', 'Soehne, sans-serif')
                })
        })

        it('author name contains correct color & font-family', () => {
            cy.get('@card').each(($slide) => {
                cy.wrap($slide).find('.jelLTb').should('have.css', 'color', 'rgb(216, 233, 253)')
                cy.wrap($slide).find('.jelLTb').should('have.css', 'border-bottom-color', 'rgb(9, 105, 221)')
                cy.wrap($slide).find('.jelLTb').should('have.css', 'font-family', 'Soehne, sans-serif')
            })
        })

        it('date contains correct color & font-family', () => {
            cy.get('@card').each(($slide) => {
                cy.wrap($slide).find('.gBYFFB').should('have.css', 'color', 'rgb(216, 233, 253)')
                cy.wrap($slide).find('.gBYFFB').should('have.css', 'font-family', 'Soehne, sans-serif')
            })
        })
    })

    context('Card deck items contain correct font size on a desktop', () => {
        beforeEach(() => {
            cy.viewport(1440, 1100)
        })

        it('card deck heading has correct font size on a desktop', () => {
            cy.get('.emBbhZ > .Heading-sc-1lllqhh-0').should('have.css', 'font-size', '35.168px')
        })

        it('card deck subheading has correct font size on a desktop', () => {
            cy.get('.emBbhZ > .Text-sc-1y3bhyp-0').should('have.css', 'font-size', '22.496px')
        })

        it('card deck button has correct font size on a desktop', () => {
            cy.getByInternalName('Read all blog articles').should('have.css', 'font-size', '18px')
        })

        it('card badges have correct correct font size on a desktop', () => {
            cy.get('.slick-track').eq(1)
                .find('.slick-slide')
                .each(($slide) => {
                    cy.wrap($slide).find('h6').should('have.css', 'font-size', '14.448px')
                })
        })

        it('card time to read has correct font size on a desktop', () => {
            cy.get('.slick-track').eq(1)
                .find('.slick-slide')
                .each(($slide) => {
                    cy.wrap($slide).find('.hGtbMo').should('have.css', 'font-size', '18px')
                })
        })

        it('card headings have correct font size on a desktop', () => {
            cy.get('.slick-track').eq(1)
                .find('.slick-slide')
                .each(($slide) => {
                    cy.wrap($slide).find('h5').should('have.css', 'font-size', '18px')
                })
        })

        it('card descriptions have correct font size on a desktop', () => {
            cy.get('.slick-track').eq(1)
                .find('.slick-slide')
                .each(($slide) => {
                    cy.wrap($slide).find('p').should('have.css', 'font-size', '18px')
                })
        })

        it('card author names have correct font size on a desktop', () => {
            cy.get('.slick-track').eq(1)
                .find('.slick-slide')
                .each(($slide) => {
                    cy.wrap($slide).find('.jelLTb').should('have.css', 'font-size', '18px')
                })
        })

        it('card dates have correct font size on a desktop', () => {
            cy.get('.slick-track').eq(1)
                .find('.slick-slide')
                .each(($slide) => {
                    cy.wrap($slide).find('.gBYFFB').should('have.css', 'font-size', '14.448px')
                })
        })
    })

    context('Card deck items contain correct font size on a tablet', () => {
        beforeEach(() => {
            cy.viewport(991, 800)
        })

        it('card deck heading has correct font size on a tablet', () => {
            cy.get('.emBbhZ > .Heading-sc-1lllqhh-0').should('have.css', 'font-size', '35.168px')
        })

        it('card deck subheading has correct font size on a tablet', () => {
            cy.get('.emBbhZ > .Text-sc-1y3bhyp-0').should('have.css', 'font-size', '22.496px')
        })

        it('card deck button has correct font size on a tablet', () => {
            cy.getByInternalName('Read all blog articles').should('have.css', 'font-size', '18px')
        })

        it('card badges have correct correct font size on a tablet', () => {
            cy.get('.slick-track').eq(1)
                .find('.slick-slide')
                .each(($slide) => {
                    cy.wrap($slide).find('h6').should('have.css', 'font-size', '14.448px')
                })
        })

        it('card time to read has correct font size on a tablet', () => {
            cy.get('.slick-track').eq(1)
                .find('.slick-slide')
                .each(($slide) => {
                    cy.wrap($slide).find('.hGtbMo').should('have.css', 'font-size', '18px')
                })
        })

        it('card headings have correct font size on a tablet', () => {
            cy.get('.slick-track').eq(1)
                .find('.slick-slide')
                .each(($slide) => {
                    cy.wrap($slide).find('h5').should('have.css', 'font-size', '18px')
                })
        })

        it('card descriptions have correct font size on a tablet', () => {
            cy.get('.slick-track').eq(1)
                .find('.slick-slide')
                .each(($slide) => {
                    cy.wrap($slide).find('p').should('have.css', 'font-size', '18px')
                })
        })

        it('card author names have correct font size on a tablet', () => {
            cy.get('.slick-track').eq(1)
                .find('.slick-slide')
                .each(($slide) => {
                    cy.wrap($slide).find('.jelLTb').should('have.css', 'font-size', '18px')
                })
        })

        it('card dates have correct font size on a tablet', () => {
            cy.get('.slick-track').eq(1)
                .find('.slick-slide')
                .each(($slide) => {
                    cy.wrap($slide).find('.gBYFFB').should('have.css', 'font-size', '14.448px')
                })
        })
    })

    context('Card deck items contain correct font size on a mobile', () => {
        beforeEach(() => {
            cy.viewport(375, 700)
        })

        it('card deck heading has correct font size on a mobile', () => {
            cy.get('.emBbhZ > .Heading-sc-1lllqhh-0').should('have.css', 'font-size', '35.168px')
        })

        it('card deck subheading has correct font size on a mobile', () => {
            cy.get('.emBbhZ > .Text-sc-1y3bhyp-0').should('have.css', 'font-size', '22.496px')
        })

        it('card deck button has correct font size on a mobile', () => {
            cy.getByInternalName('Read all blog articles').should('have.css', 'font-size', '18px')
        })

        it('card badges have correct correct font size on a mobile', () => {
            cy.get('.slick-track').eq(1)
                .find('.slick-slide')
                .each(($slide) => {
                    cy.wrap($slide).find('h6').should('have.css', 'font-size', '14.448px')
                })
        })

        it('card time to read has correct font size on a mobile', () => {
            cy.get('.slick-track').eq(1)
                .find('.slick-slide')
                .each(($slide) => {
                    cy.wrap($slide).find('.hGtbMo').should('have.css', 'font-size', '18px')
                })
        })

        it('card headings have correct font size on a mobile', () => {
            cy.get('.slick-track').eq(1)
                .find('.slick-slide')
                .each(($slide) => {
                    cy.wrap($slide).find('h5').should('have.css', 'font-size', '18px')
                })
        })

        it('card descriptions have correct font size on a mobile', () => {
            cy.get('.slick-track').eq(1)
                .find('.slick-slide')
                .each(($slide) => {
                    cy.wrap($slide).find('p').should('have.css', 'font-size', '18px')
                })
        })

        it('card author names have correct font size on a mobile', () => {
            cy.get('.slick-track').eq(1)
                .find('.slick-slide')
                .each(($slide) => {
                    cy.wrap($slide).find('.jelLTb').should('have.css', 'font-size', '18px')
                })
        })

        it('card dates have correct font size on a mobile', () => {
            cy.get('.slick-track').eq(1)
                .find('.slick-slide')
                .each(($slide) => {
                    cy.wrap($slide).find('.gBYFFB').should('have.css', 'font-size', '14.448px')
                })
        })
    })
})