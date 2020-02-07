FROM httpd:2.4.41-alpine

LABEL maintainer "genzouw <genzouw@gmail.com>"

COPY . /usr/local/apache2/htdocs/
