import { getTemperatureColor } from '@/lib/utils'

describe('Utils', () => {
  describe('getTemperatureColor', () => {
    test('returns cold color for temperatures <= 5', () => {
      expect(getTemperatureColor(5)).toBe('bg-gradient-to-b from-sky-500 to-sky-700')
      expect(getTemperatureColor(0)).toBe('bg-gradient-to-b from-sky-500 to-sky-700')
      expect(getTemperatureColor(-5)).toBe('bg-gradient-to-b from-sky-500 to-sky-700')
    })

    test('returns warm color for temperatures between 5 and 25', () => {
      expect(getTemperatureColor(15)).toBe('bg-gradient-to-b from-orange-500 to-orange-700')
      expect(getTemperatureColor(20)).toBe('bg-gradient-to-b from-orange-500 to-orange-700')
    })

    test('returns hot color for temperatures > 25', () => {
      expect(getTemperatureColor(26)).toBe('bg-gradient-to-b from-red-500 to-red-700')
      expect(getTemperatureColor(30)).toBe('bg-gradient-to-b from-red-500 to-red-700')
    })
  })
}) 