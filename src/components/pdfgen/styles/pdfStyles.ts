import { StyleSheet } from '@react-pdf/renderer';

const pdfStyles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 20,
    position: 'relative',
  },
  watermarkContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  watermark: {
    width: '100%',
    height: '100%',
    opacity: 0.1,
  },
  section: {
    margin: 10,
    padding: 10,
    fontSize: 12,
    borderBottom: '1px solid #EEE',
  },
  title: {
    fontSize: 14,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  text: {
    marginBottom: 3,
    fontSize: 12,
  },
  highlight: {
    fontWeight: 'bold',
    color: 'red',
  },
  card: {
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 5,
    backgroundColor: '#FAFAFA',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
  },
});

export default pdfStyles;
