Splitting().forEach(s => {
	/* Loop through words */
	s.words.forEach(word => {
		/* If the parent element includes `aria-label`, set `aria-hidden="true"` */
		if (word.parentElement.getAttribute('aria-label')) {
			word.setAttribute('aria-hidden', true)
		}
	})
});