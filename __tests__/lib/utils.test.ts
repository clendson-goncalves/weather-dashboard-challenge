import { getTemperatureColor } from '@/lib/utils'

describe('Utils', () => {
  describe('getTemperatureColor', () => {
    test('returns cold color for temperatures <= 5', () => {
      expect(getTemperatureColor(5)).toBe('from-sky-400 to-sky-600')
      expect(getTemperatureColor(0)).toBe('from-sky-400 to-sky-600')
      expect(getTemperatureColor(-5)).toBe('from-sky-400 to-sky-600')
    })

    test('returns warm color for temperatures between 5 and 25', () => {
      expect(getTemperatureColor(15)).toBe('from-orange-400 to-orange-600')
      expect(getTemperatureColor(20)).toBe('from-orange-400 to-orange-600')
    })

    test('returns hot color for temperatures > 25', () => {
      expect(getTemperatureColor(26)).toBe('from-red-400 to-red-600')
      expect(getTemperatureColor(30)).toBe('from-red-400 to-red-600')
    })
  })
}) 