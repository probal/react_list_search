import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // Styles go here
  'container1': {
    'marginTop': [{ 'unit': 'px', 'value': 80 }]
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
    'margin': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }]
  },
  'category-item': {
    'justifyContent': 'flex-start',
    'backgroundColor': 'transparent !important',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.1)' }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.1)' }, { 'unit': 'string', 'value': '!important' }],
    'borderRadius': '3px !important',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.06)' }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.06)' }, { 'unit': 'string', 'value': '!important' }],
    'flex': '1',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }]
  },
  'fixed-top': {
    'position': 'fixed',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'marginBottom': [{ 'unit': 'px', 'value': 50 }],
    'backgroundColor': 'rgb(221, 221, 221)',
    'zIndex': '1030'
  },
  'card-margin': {
    'margin': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 15 }]
  }
});
