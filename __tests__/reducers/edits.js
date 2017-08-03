jest.unmock('../../src/js/reducers/edits.js')
import * as types from '../../src/js/constants'
import excludeTypes from './excludeTypes.js'
import edits from '../../src/js/reducers/edits.js'

const defaultEdits = {
  isFetching: false,
  fetched: false,
  types: {
    syntactical: {edits: []},
    validity: {edits: []},
    quality: {edits: [], verified: false},
    macro: {edits: [], verified: false}
  },
  rows: {}
}

describe('edits reducer', () => {
  it('should return the initial state on empty action', () => {
    expect(
      edits(undefined, {})
    ).toEqual(defaultEdits)
  })
  it('handles REQUEST_EDIT', () => {
    expect(
      edits({rows:{'anEdit': {a:2}}},
      {type: types.REQUEST_EDIT, edit: 'anEdit'}
    )).toEqual({rows:{anEdit:{a:2, isFetching: true}}})
  })
  it('handles RECEIVE_EDIT', () => {
    expect(
      edits({rows:{'anEdit': {a:2}}},
      {type: types.RECEIVE_EDIT, edit: 'anEdit', rows: 'rows'}
    )).toEqual({rows:{anEdit:{a:2, isFetching: false, rows: 'rows'}}})
  })
  it('handles REQUEST_EDITS', () => {
    expect(
      edits({},
      {type: types.REQUEST_EDITS}
    )).toEqual({isFetching: true})
  })

  it('handles RECEIVE_EDITS', () => {
    expect(
      edits({},
      {type: types.RECEIVE_EDITS,
       edits:'EDITS'
      }
    )).toEqual({types: 'EDITS', fetched: true, isFetching: false})
  })

  it('handles VERIFY_QUALITY', () => {
    expect(
       edits({types:{quality:{verified:false}}},
      {type: types.VERIFY_QUALITY, checked: true}
    )).toEqual({types:{quality:{verified:true, isFetching: false}}})
    expect(
       edits({types:{quality:{verified:true}}},
      {type: types.VERIFY_QUALITY, checked: false}
    )).toEqual({types:{quality:{verified:false, isFetching: false}}})
    expect(
       edits({types:{quality:{verified:true}}},
      {type: types.VERIFY_QUALITY, checked: true}
    )).toEqual({types:{quality:{verified:true, isFetching: false}}})
  })

  it('handles VERIFY_MACRO', () => {
    expect(
       edits({types:{macro: {verified:false}}},
      {type: types.VERIFY_MACRO, checked: true}
    )).toEqual({types:{macro:{verified:true, isFetching: false}}})
    expect(
       edits({types:{macro:{verified:true}}},
      {type: types.VERIFY_MACRO, checked: false}
    )).toEqual({types:{macro:{verified:false, isFetching: false}}})
    expect(
       edits({types:{macro:{verified:true}}},
      {type: types.VERIFY_MACRO, checked: true}
    )).toEqual({types:{macro:{verified:true, isFetching: false}}})
  })
  it('handles REQUEST_VERIFY_QUALITY', () => {
      expect(
         edits({types:{quality: {isFetching:false}}},
        {type: types.REQUEST_VERIFY_QUALITY}
      )).toEqual({types:{quality:{isFetching: true}}})
    })

  it('handles REFRESH_STATE', () => {
    expect(
       edits({},
      {type: types.REFRESH_STATE}
    )).toEqual(defaultEdits)
  })
  it('handles REQUEST_VERIFY_MACRO', () => {
    expect(
       edits({types:{macro: {isFetching:false}}},
      {type: types.REQUEST_VERIFY_MACRO}
    )).toEqual({types:{macro:{isFetching: true}}})
  })

  it('handles REFRESH_STATE', () => {
    expect(
       edits({},
      {type: types.REFRESH_STATE}
    )).toEqual(defaultEdits)
  })

  it('shouldn\'t modify state on an unknown action type', () => {
    excludeTypes(
        types.REQUEST_VERIFY_QUALITY,
        types.REQUEST_VERIFY_MACRO,
        types.VERIFY_QUALITY,
        types.VERIFY_MACRO,
        types.RECEIVE_EDITS,
        types.REQUEST_EDITS,
        types.RECEIVE_EDIT,
        types.REQUEST_EDIT,
        types.REFRESH_STATE)
      .forEach(v => expect(edits({}, v))
        .toEqual({})
      )
  })
})
