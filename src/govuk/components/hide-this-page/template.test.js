/**
 * @jest-environment jsdom
 */
/* eslint-env jest */

const axe = require('../../../../lib/axe-helper')

const { render, getExamples } = require('../../../../lib/jest-helpers')

const examples = getExamples('hide-this-page')

describe('Hide this page', () => {
  describe('by default', () => {
    it('passes accessibility tests', async () => {
      const $ = render('hide-this-page', examples.default)

      const results = await axe($.html())
      expect(results).toHaveNoViolations()
    })
  })
})
