import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // Styles go here
  'border-me': {
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }]
  },
  'space-around': {
    'justifyContent': 'space-around'
  },
  'wrap': {
    'flexWrap': 'wrap'
  },
  'flex-row': {
    'display': 'flex',
    'flexDirection': 'row'
  },
  'filter-container': {
    'margin': [{ 'unit': 'px', 'value': 50 }, { 'unit': 'px', 'value': 50 }, { 'unit': 'px', 'value': 50 }, { 'unit': 'px', 'value': 50 }]
  },
  'grow-equally div': {
    'flexGrow': '1'
  },
  'section-container div:nth-child(1)': {
    'flexGrow': '3'
  },
  'article-image': {
    'width': [{ 'unit': 'px', 'value': 230 }],
    'height': [{ 'unit': 'px', 'value': 160 }]
  },
  'category-image': {
    'width': [{ 'unit': 'px', 'value': 96 }],
    'height': [{ 'unit': 'px', 'value': 72 }]
  },
  'category-container': {
    'margin': [{ 'unit': 'px', 'value': 100 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }]
  },
  'category-item': {
    'backgroundColor': 'transparent !important',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.1)' }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.1)' }, { 'unit': 'string', 'value': '!important' }],
    'borderRadius': '3px !important',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.06)' }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.06)' }, { 'unit': 'string', 'value': '!important' }],
    'marginBottom': [{ 'unit': 'px', 'value': 4 }, { 'unit': 'string', 'value': '!important' }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }],
    'overflow': 'hidden !important',
    'width': [{ 'unit': '%H', 'value': 1 }, { 'unit': 'string', 'value': '!important' }]
  },
  'fixed-top': {
    'position': 'fixed',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 300 }],
    'left': [{ 'unit': 'px', 'value': 200 }],
    'marginBottom': [{ 'unit': 'px', 'value': 50 }],
    'backgroundColor': '#6a6a77',
    'zIndex': '1030'
  },
  'card-margin': {
    'margin': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 10 }]
  }
});
