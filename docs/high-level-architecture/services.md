---
title: Services 
description: What are services in AstroCore?
sidebar_position: 2
---

# Applications

## Introduction

Services are the highest level of abstraction in AstroCore applications. They are tasks which are executed at a certain frequency and are expected to accomplish one specific functionality. These tasks will periodically check for events, as well as periodically execute some functionality. These services should have CLI utilities to interact with them.

## Service Management

Similar to the systemd utility for Linux operating systems, there should be a CLI utility that we can use to get a list of all running services, what their state is (running, suspended, disabled) as well as to be able to see some logs.

## Core Services

### Health Management

### File Manager

### Telemetry

### Data Storage

### Housekeeping

### Watchdog

### Communications

### Scheduler

## Mission Services 

### Imaging

### Inference

### Laboratory

### ADCS

### Thermal