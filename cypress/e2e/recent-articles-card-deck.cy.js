describe('Homepage Recent Articles Card Deck', () => {
  beforeEach(() => {
      cy.visit('https://www.webstacks.com/')
      cy.viewport('macbook-15')
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
  })

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

  it('images on cards have src and alt attributes', () => {
      cy.get('.slick-track').eq(1)
          .find('.slick-slide')
          .each(($slide) => {
              cy.wrap($slide).find('img').should('have.attr', 'src').and('not.be.empty')
          })

      cy.get('.slick-track').eq(1)
          .find('.slick-slide')
          .each(($slide) => {
              cy.wrap($slide).find('img').should('have.attr', 'alt').and('not.be.empty')
          })
  })

  it('checks href is not empty', () => {
      cy.get('.slick-track').eq(1)
          .find('.slick-slide')
          .each(($slide) => {
              cy.wrap($slide).find('a').should('have.attr', 'href').and('not.be.empty')
          })
  })

  it('the card badges contain the correct css values', () => {
      cy.get('.slick-track').eq(1)
          .find('.slick-slide')
          .each(($slide) => {
              cy.wrap($slide).find('h6').should('have.css', 'background-color', 'rgb(3, 19, 62)')
          })

      cy.get('.slick-track').eq(1)
          .find('.slick-slide')
          .each(($slide) => {
              cy.wrap($slide).find('h6').should('have.css', 'color', 'rgb(122, 156, 249)')
          })

      cy.get('.slick-track').eq(1)
          .find('.slick-slide')
          .each(($slide) => {
              cy.wrap($slide).find('h6').should('have.css', 'font-family', 'Soehne, sans-serif')
          })

      cy.get('.slick-track').eq(1)
          .find('.slick-slide')
          .each(($slide) => {
              cy.wrap($slide).find('h6').should('have.css', 'font-size', '14.448px')
          })
  })

  it('the h5 headings contain the correct css values', () => {
      cy.get('.slick-track').eq(1)
          .find('.slick-slide')
          .each(($slide) => {
              cy.wrap($slide).find('h5').should('have.css', 'color', 'rgb(216, 233, 253)')
          })

      cy.get('.slick-track').eq(1)
          .find('.slick-slide')
          .each(($slide) => {
              cy.wrap($slide).find('h5').should('have.css', 'font-family', 'Soehne, sans-serif')
          })

      cy.get('.slick-track').eq(1)
          .find('.slick-slide')
          .each(($slide) => {
              cy.wrap($slide).find('h5').should('have.css', 'font-size', '18px')
          })
  })

  it('the p text contains the correct css values', () => {
      cy.get('.slick-track').eq(1)
          .find('.slick-slide')
          .each(($slide) => {
              cy.wrap($slide).find('p').should('have.css', 'color', 'rgb(216, 233, 253)')
          })

      cy.get('.slick-track').eq(1)
          .find('.slick-slide')
          .each(($slide) => {
              cy.wrap($slide).find('p').should('have.css', 'font-family', 'Soehne, sans-serif')
          })

      cy.get('.slick-track').eq(1)
          .find('.slick-slide')
          .each(($slide) => {
              cy.wrap($slide).find('p').should('have.css', 'font-size', '18px')
          })
  })
})