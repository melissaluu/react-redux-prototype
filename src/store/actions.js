export function updateColor(value = '#ffffff') {
    return {
      type: 'UPDATE_COLOR',
      payload: value,
    };
  }