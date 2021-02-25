/// <reference types="Cypress" />

describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Part2-Cypress');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it("Slider changes when volume input changes", () => {
    cy.get("#volume-number").clear().type("75");
    cy.get('#volume-slider').then(($el) => {
      expect($el).to.have.value(75);
    });
  });

  it("Slider changes when volume input changes", () => {
    cy.get("#volume-slider").invoke("val", "33").trigger("input");
    cy.get('#volume-number').then(($el) => {
      expect($el).to.have.value(33);
    });
  })

  it("Audio tag volume changes", () => {
    cy.get("#volume-slider").invoke("val", "33").trigger("input");
    cy.get('audio').then(($el) => {
      expect($el).to.have.prop("volume", 0.33);
    });
  });

  it("Image and Audio changes to Party Horn", () => {
    cy.get("#radio-party-horn").click();
    cy.get("#sound-image").then(($el) => {
      expect($el).to.have.attr("src", "./assets/media/images/party-horn.svg");
    });
    cy.get("audio").then(($el) => {
      expect($el).to.have.attr("src", "./assets/media/audio/party-horn.mp3");
    });
  });

  it("Testing Volume Image Changes", () => {
    cy.get("#volume-slider").invoke("val", "0").trigger("input");
    cy.get("#volume-image").then(($el) => {
      expect($el).to.have.attr("src", "./assets/media/icons/volume-level-0.svg");
    });
    cy.get("#volume-slider").invoke("val", "33").trigger("input");
    cy.get("#volume-image").then(($el) => {
      expect($el).to.have.attr("src", "./assets/media/icons/volume-level-1.svg");
    });
    cy.get("#volume-slider").invoke("val", "66").trigger("input");
    cy.get("#volume-image").then(($el) => {
      expect($el).to.have.attr("src", "./assets/media/icons/volume-level-2.svg");
    });
    cy.get("#volume-slider").invoke("val", "100").trigger("input");
    cy.get("#volume-image").then(($el) => {
      expect($el).to.have.attr("src", "./assets/media/icons/volume-level-3.svg");
    });
  });

  it("Testing Honk Disabled", () => {
    cy.get("#volume-number").invoke("val", "").trigger("input");
    cy.get("#honk-btn").then(($el) => {
      expect($el).to.have.attr("disabled");
    });

    cy.get("#volume-number").invoke("val", "asdf").trigger("input");
    cy.get("#honk-btn").then(($el) => {
      expect($el).to.have.attr("disabled");
    });

    cy.get("#volume-number").invoke("val", "0").trigger("input");
    cy.get("#honk-btn").then(($el) => {
      expect($el).to.have.attr("disabled");
    });

    cy.get("#volume-number").invoke("val", "1").trigger("input");
    cy.get("#honk-btn").then(($el) => {
      expect($el).to.not.have.attr("disabled");
    });

  });

  it("Testing error shown", () => {
    cy.get("#volume-number").invoke("val", "1111").trigger("input");
    cy.get("#volume-number:invalid").should("exist");
    cy.get("#volume-number").invoke("val", "33").trigger("input");
    cy.get("#volume-number:invalid").should("not.exist");
  });
});
