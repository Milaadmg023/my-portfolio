document.querySelector('a').addEventListener('click', function(event) {
     event.preventDefault();
     window.open(this.href, '_blank');
 });