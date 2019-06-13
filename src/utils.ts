/* global mapkit */

export type NumberTuple = [number, number]
export type Rect = [number, number, number, number]
export type PaddingType = number | mapkit.Padding

export const createPadding = (padding: PaddingType) => {
  return new mapkit.Padding(
    typeof padding === 'number'
      ? {
          top: padding,
          right: padding,
          bottom: padding,
          left: padding,
        }
      : padding,
  )
}

export const createCoordinate = (latitude: number, longitude: number) => {
  return new mapkit.Coordinate(latitude, longitude)
}

export const createCoordinateSpan = (
  latitudeDelta: number,
  longitudeDelta: number,
) => {
  return new mapkit.CoordinateSpan(latitudeDelta, longitudeDelta)
}

export const createCoordinateRegion = (
  center: mapkit.Coordinate,
  span: mapkit.CoordinateSpan,
) => {
  return new mapkit.CoordinateRegion(center, span)
}

export const createMapPoint = (x: number, y: number) => {
  return new mapkit.MapPoint(x, y)
}

export const createMapRect = (
  x: number,
  y: number,
  width: number,
  height: number,
) => {
  return new mapkit.MapRect(x, y, width, height)
}
