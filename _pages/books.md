---
title: "Books"
layout: page-no-sidebar
permalink: "/books/"
---

<section class="books">
{% assign books = site.books %}
	{% for book in books %}
		<article class="book">
			<header>
				{% if book.tags %}
				<p class="book__genres mt0">
					{% for tag in book.tags %}
					<span class="book__genre tag">{{tag}}</span>
					{% endfor %}
				</p>
				{% endif %}

				<h3 class="book__title"><a href="{{book.url}}">{{ book.title }}</a></h3>
				<p class="book__author">by <a href="#">{{ book.author }}</a></p>
			</header>
		</article>
	{% endfor %}
</section>