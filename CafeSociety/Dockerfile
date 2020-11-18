FROM php:7.3.15-apache

LABEL maintainer="Pieter de Vries <pieterandcamryn@gmail.com>"

# Update system and apply changes
RUN apt-get update
RUN apt-get upgrade -y

# Install common tools
RUN apt-get install --no-install-recommends --no-install-suggests -y vim
RUN apt-get install --no-install-recommends --no-install-suggests -y nano
RUN apt-get install --no-install-recommends --no-install-suggests -y htop
RUN docker-php-ext-install mysqli && docker-php-ext-enable mysqli

# Expose ports needed
EXPOSE 80
EXPOSE 443
EXPOSE 3306

# Make the www user the main user.
RUN chown -R www-data:www-data /var/www/

# startup location
WORKDIR /var/www

# Listen to apache2
CMD /usr/sbin/apache2ctl -D FOREGROUND
