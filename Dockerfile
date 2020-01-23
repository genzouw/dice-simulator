FROM httpd:2.4.41-alpine

LABEL maintainer "genzouw <genzouw@gmail.com>"

ADD . /usr/local/apache2/htdocs/
